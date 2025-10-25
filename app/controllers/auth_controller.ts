   import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import hash from '@adonisjs/core/services/hash'


export default class AuthController {
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

 console.log(request.all())
    const user = await User.findBy('email', email)
  
    if (!user || !(await hash.verify(password, user.password))) {
      return response.unauthorized({ message: 'Credenciais inválidas' })
    }
 console.log('erro ---->', auth);


    const token = await auth.use('api').generate(user)

    return response.ok({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
       
        
      },
    })
  }
}
