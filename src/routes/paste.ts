import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from 'fastify'
import relativeTime from 'dayjs/plugin/relativeTime'
import { verifyUser } from '../verifyUser'
import { pool } from '../database'
import { nanoid } from 'nanoid'
import mime from 'mime-types'
import path from 'path'
import ms from 'ms'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

function v2b(val?: 'on' | 'off') {
  return val ? val === 'on' : false
}

interface Paste {
  id: number
  user_id: number
  key: string
  language: string
  encrypted: boolean
  ephemeral: boolean
  data: string
  delete_at: Date
  iv?: string
}
async function getPaste(key: string): Promise<Paste> {
  const q = await pool.query(
    'SELECT id, user_id, key, language, encrypted, ephemeral, delete_at, data, iv FROM paste WHERE key = $1',
    [key]
  )
  if (q.rowCount === 0) {
    const ex = new Error('Paste does not exist or was deleted')
    ;(ex as any).statusCode = 404
    throw ex
  }
  const row = q.rows[0]
  const p = row as Paste
  if (Date.now() > p.delete_at.getTime()) {
    await burnPaste(p.id)
    const ex = new Error('Paste does not exist or was deleted')
    ;(ex as any).statusCode = 404
    throw ex
  }
  return p
}
async function burnPaste(id: number): Promise<void> {
  await pool.query('DELETE FROM paste WHERE id = $1', [id])
}

// if this is changed and you have existing pastes with different length keys
// they will not be accessible
const PASTE_KEY_LENGTH = 12

export const pasteRouter: FastifyPluginAsync<{}> = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.addSchema({
    $id: 'keyParams',
    type: 'object',
    required: ['key'],
    properties: {
      key: {
        type: 'string',
        length: PASTE_KEY_LENGTH,
      },
    },
  })

  fastify
    .get('/new', async (req, res) => {
      const key = req.unsignCookie(req.cookies.pastekey || '')
      if (!key.valid) throw 'Invalid key'
      const id = await verifyUser(key.value!)
      await res.view('pages/paste/new', { id })
    })
    .post(
      '/new',
      {
        schema: {
          body: {
            type: 'object',
            required: ['data'],
            properties: {
              language: {
                type: 'string',
                enum: ['javascript', 'typescript', 'markdown', 'text'],
              },
              expire: {
                type: 'string',
                enum: ['365d', '1m', '30m', '1h', '1d', '30d'],
              },
              data: {
                type: 'string',
              },
              ephemeral: {
                type: 'string',
                enum: ['on', 'off'],
              },
              encrypt: {
                type: 'string',
                enum: ['on', 'off'],
              },
              iv: {
                type: 'string',
              },
            },
          },
        },
      },
      async (req, res) => {
        const key = req.unsignCookie(req.cookies.pastekey || '')
        if (!key.valid) throw 'Invalid key'
        const userId = await verifyUser(key.value!)

        const body = req.body as {
          language?: string
          expire?: '365d' | '1m' | '30m' | '1h' | '1d' | '30d'
          data: string

          ephemeral?: 'on' | 'off'
          encrypt?: 'on' | 'off'
          iv?: string
        }

        const pasteKey = nanoid(PASTE_KEY_LENGTH)

        const { data } = body

        const expire = body.expire || '30m',
          language = body.language || 'text',
          encrypted = v2b(body.encrypt),
          ephemeral = v2b(body.ephemeral),
          deleteAt = new Date(Date.now() + ms(expire))

        if (encrypted && !body.iv) throw 'missing IV'

        const sqlInsert = encrypted
          ? `INSERT INTO paste(user_id, key, language, encrypted, ephemeral, iv, data, delete_at)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
          : `INSERT INTO paste(user_id, key, language, encrypted, ephemeral, data, delete_at)
        VALUES($1, $2, $3, $4, $5, $6, $7)`

        // oh well, data/iv must be base64 -> text since node-pg likes
        // fucking up Buffer encoding
        const values = encrypted
          ? [
              userId,
              pasteKey,
              language,
              encrypted,
              ephemeral,
              body.iv!,
              data,
              deleteAt,
            ]
          : [userId, pasteKey, language, encrypted, ephemeral, data, deleteAt]
        await pool.query(sqlInsert, values)
        req.headers.accept?.match(/json/)
          ? res.send({
              key: pasteKey,
            })
          : res.send(`${process.env.BASE_URL}/pastes/${pasteKey}`)
      }
    )

  fastify.get(
    '/:key',
    { schema: { params: { $ref: 'keyParams#' } } },
    async (req, res) => {
      const { key } = req.params as { key: string }
      const basename = path.basename(key)

      const paste = await getPaste(basename)

      const state = {
        profile: -1,
        pasteId: paste.id,
        key: paste.key,
        encrypted: paste.encrypted,
        ephemeral: paste.ephemeral,
        language: paste.language,
        expires: paste.delete_at,
        expiresPretty: dayjs(paste.delete_at).fromNow(false),

        user_id: paste.user_id,
      }

      try {
        const userKey = req.unsignCookie(req.cookies.pastekey || '')
        if (!userKey.valid) throw 'Invalid key'
        const userId = await verifyUser(userKey.value!)
        state.profile = userId
      } catch (ex) {}

      return res.view('pages/paste/paste', { state })
    }
  )

  fastify.get(
    '/burn/:key',
    { schema: { params: { $ref: 'keyParams#' } } },
    async (req, res) => {
      const userKey = req.unsignCookie(req.cookies.pastekey || '')
      if (!userKey.valid) throw 'Invalid key'
      const userId = await verifyUser(userKey.value!)

      const { key } = req.params as { key: string }
      const basename = path.basename(key)
      const paste = await getPaste(basename)

      if (paste.user_id !== userId) {
        const ex = new Error('Paste does not exist or was deleted')
        ;(ex as any).statusCode = 404
        throw ex
      }

      await burnPaste(paste.id)

      const ex = new Error('Paste has been burned')
      ;(ex as any).statusCode = 200
      throw ex
    }
  )

  fastify.get(
    '/hydrate/:key',
    { schema: { params: { $ref: 'keyParams#' } } },
    async (req, res) => {
      const { key } = req.params as { key: string }
      const basename = path.basename(key)
      const paste = await getPaste(basename)

      const state = {
        pasteId: paste.id,
        key: paste.key,
        encrypted: paste.encrypted,
        ephemeral: paste.ephemeral,
        language: paste.language,
        expires: paste.delete_at,
        data: paste.data,
        iv: paste.iv,
        burned: false,
      }

      if (paste.ephemeral) {
        // burn
        await burnPaste(paste.id)
        res.header('X-Burned', 1)
        state.burned = true
      }

      return res.send(state)
    }
  )

  const languages = {
    javascript: 'js',
    typescript: 'js',
    markdown: 'md',
    text: 'txt',
  }
  fastify.get(
    '/raw/:key',
    { schema: { params: { $ref: 'keyParams#' } } },
    async (req, res) => {
      const { key } = req.params as { key: string }
      const basename = path.basename(key)

      const paste = await getPaste(basename)
      if (paste.encrypted) return res.redirect(`/paste/${basename}`)

      // shh
      const mapped = languages[paste.language as 'javascript']

      const mimeType = mime.lookup(paste.language) || mime.lookup(mapped)
      const data = Buffer.from(paste.data, 'base64')

      if (paste.ephemeral) {
        // burn
        await burnPaste(paste.id)
        res.header('X-Burned', 1)
      }

      res.header('Content-Type', mimeType).send(data.toString('utf8'))
    }
  )
}
