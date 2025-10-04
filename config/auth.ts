import { defineConfig } from '@adonisjs/auth'

export default defineConfig({
  default: 'web', // ou 'guard' dependendo da versão
  guards: {
    web: {
      driver: 'session',
      provider: {
        driver: 'lucid',
        model: () => import('#models/user'),
      },
    },
  },
})
