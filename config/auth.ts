import { defineConfig } from '@adonisjs/auth'

const authConfig = defineConfig({
  default: 'jwt',

  guards: {
    jwt: {
      driver: 'oat', // "opaque access token" (recomendado no Adonis 6)
      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
      },
      provider: {
        type: 'lucid',
        model: () => import('#models/user'),
      },
    },
  },
})

export default authConfig
