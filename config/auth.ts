import { defineConfig } from '@adonisjs/auth'

export default defineConfig({
  default: 'api', // 👈 nosso guard padrão
  guards: {
    api: {
      driver: 'oat', // “opaque access token”
      provider: {
        driver: 'lucid',
        model: () => import('#models/user'),
      },
      tokens: {
        table: 'api_tokens',
      },
    } as any,
  },
})
