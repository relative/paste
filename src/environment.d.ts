declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string
      NODE_ENV?: 'production' | 'development'

      BASE_URL: string
    }
  }
}

export {}
