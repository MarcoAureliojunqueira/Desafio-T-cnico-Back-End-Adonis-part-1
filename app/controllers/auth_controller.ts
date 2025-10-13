   import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/User'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)

    if (!user || !(await hash.verify(user.password, password))) {
      return response.unauthorized({ message: 'Credenciais inválidas' })
    }

    const token = await auth.use('api').generate(user)

    return response.ok({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        
      },
    })
  }
}
