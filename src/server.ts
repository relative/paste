import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import pointOfView from 'point-of-view'
import formBody from 'fastify-formbody'
import cookie from 'fastify-cookie'
import path from 'path'
import ejs from 'ejs'
import ms from 'ms'

import { pasteRouter } from './routes/paste'
import { pool } from './database'
import { verifyUser } from './verifyUser'

const fastify = Fastify({
  logger: true,
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'public'),
  prefix: '/public/',
})

fastify.register(cookie, {
  secret: process.env.SECRET,
  parseOptions: {},
})
fastify.register(formBody)

fastify.register(pointOfView, {
  engine: {
    ejs,
  },
  root: path.join(__dirname, 'views'),
  layout: './templates/template',
  viewExt: 'ejs',
  defaultContext: {
    dev: (process.env.NODE_ENV || '') !== 'production',
  },
})

fastify.register(pasteRouter, { prefix: 'paste' })

fastify.get('/', async (req, res) => {
  if (!req.cookies.pastekey) return res.redirect('/login')
  return res.redirect('/paste/new')
})

fastify
  .get('/login', async (req, res) => {
    await res.view('pages/login')
  })
  .post(
    '/login',
    {
      schema: {
        body: {
          type: 'object',
          required: ['key', 'submit'],
          properties: {
            key: {
              type: 'string',
              minLength: 36,
            },
            submit: {
              type: 'string',
            },
          },
        },
      },
    },
    async (req, res) => {
      const { key, submit } = req.body as { key: string; submit: string }
      try {
        await verifyUser(key)

        res
          .setCookie('pastekey', key, {
            signed: true,
            expires: new Date(Date.now() + ms('7d')),
            httpOnly: true,
          })
          .redirect('/paste/new')
      } catch (ex) {
        fastify.log.error(ex)
      }
      throw 'Invalid key'
    }
  )

fastify.get('/logout', async (req, res) => {
  await res.clearCookie('pastekey').redirect('/login')
})

fastify
  .setNotFoundHandler((req, res) => {
    const ex = new Error('Page not found')
    ;(ex as any).statusCode = 404
    throw ex
  })
  .setErrorHandler((ex, req, res) => {
    let message = ex.message,
      status = ex.statusCode || 500
    if (ex.validation) status = 400 // bad request

    res.status(status)

    req.headers.accept?.match(/json/)
      ? res.send({
          status,
          message,
        })
      : res.view('pages/error', { status, message })
  })

export function listen() {
  fastify.listen(parseInt(process.env.PORT || '3000'), (err, addr) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info('Listening on', addr)
  })
}
