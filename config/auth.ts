import { defineConfig } from '@adonisjs/auth'
import User from '#models/user'

const authConfig = defineConfig({
  default: 'api',
  guards: {
    api: {
      driver: 'oat', // ou 'access_tokens', dependendo do setup
      model: () => User,
      tokenProvider: {
        type: 'api',
        driver: 'database',
      },
    },
  },
})

export default authConfig
