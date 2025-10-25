import { defineConfig } from '@adonisjs/auth'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import User from '#models/user'

const authConfig = defineConfig({
  default: 'api',

  guards: {
    api: {
      driver: 'access_tokens',
      tokensProvider: DbAccessTokensProvider.forModel(User),
      useLucidUserProvider: true,
    } as any,
  },
})

export default authConfig
