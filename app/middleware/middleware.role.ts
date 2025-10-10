// app/middleware/role.ts
import type { HttpContext } from '@adonisjs/core/http'


export default class RoleMiddleware {
  async handle({ auth, response }: HttpContext, next: () => Promise<void>, allowedRoles: string[]) {
    const user = auth.user
    if (!user || !allowedRoles.includes(user.role)) {
      return response.unauthorized({ message: 'Acesso negado' })
    }
    await next()
  }
}
