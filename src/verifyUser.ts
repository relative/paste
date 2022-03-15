import { pool } from './database'

export async function verifyUser(_key?: string) {
  if (!_key) throw 'Invalid key'
  const [id, key] = _key.split(':')
  const query = await pool.query(
    'select "id" from public.user where "id" = $1 and "key" = $2',
    [id, key]
  )
  if (query.rowCount === 0) throw 'Invalid key'
  return query.rows[0].id
}
