import 'dotenv/config'
import { databaseConnect, databaseEnd } from './database'
import { listen } from './server'

databaseConnect()
  .then(() => {
    listen()
  })
  .catch((ex) => {
    console.error('Failed to connect to database', ex)
  })

process.on('beforeExit', async () => {
  try {
    await databaseEnd()
  } catch (ex) {
    console.error('Failed to cleanup', ex)
  } finally {
    process.exit(0)
  }
})
