import { Client, Pool, types } from 'pg'

export const pool = new Pool({})

export async function databaseConnect() {
  // native.Client is an anonymous function
  // set NODE_PG_FORCE_NATIVE=1 in environment to use native PG

  // node-postgres breaks TIMESTAMP WITHOUT TIME ZONE
  // it parses it to local time
  types.setTypeParser(types.builtins.TIMESTAMP, function (stringValue) {
    return stringValue
  })

  if (Client.name === '') {
    console.log('Using native postgres driver')
  } else {
    console.warn('Using JavaScript (!!) postgres driver')
  }

  await pool.connect()
  return pool
}

export async function databaseEnd() {
  await pool.end()
}
