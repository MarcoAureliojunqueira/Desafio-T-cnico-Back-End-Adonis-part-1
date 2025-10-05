import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  // Exibe o formulário de login
  async showLogin({ response }: HttpContext) {
    // Se não tiver o pacote de views, podemos só retornar HTML simples:
    return response.html(`
      <form method="POST" action="/login">
        <input type="email" name="email" placeholder="E-mail" required />
        <input type="password" name="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
    `)
  }

  // Faz o login
  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.use('web').attempt(email, password)
      return response.redirect('/') // redireciona após login bem-sucedido
    } catch {
      return response.badRequest({ message: 'Credenciais inválidas' })
    }
  }

  // Faz logout
  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
