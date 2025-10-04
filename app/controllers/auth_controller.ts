import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  // Exibe o formulário de login
  async showLogin({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  // Faz o login
  async login({ request, auth, response, session }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.use('web').attempt(email, password)
      return response.redirect('/') // redireciona para home
    } catch {
      session.flash('error', 'Credenciais inválidas')
      return response.redirect().back()
    }
  }

  // Faz logout
  async logout({ auth, response }: HttpContextContract) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
