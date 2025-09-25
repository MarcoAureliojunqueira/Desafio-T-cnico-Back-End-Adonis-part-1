// app/validators/user.ts
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UserValidator {
  public schema = schema.create({
    // Defina os campos e regras aqui
    username: schema.string({ trim: true }, [
      rules.minLength(3)
    ]),
    email: schema.string({}, [
      rules.email()
    ]),
    password: schema.string({}, [
      rules.minLength(6)
    ]),
  })

  public messages = {
    'username.required': 'O nome de usuário é obrigatório',
    'username.minLength': 'O nome de usuário precisa ter pelo menos 3 caracteres',
    'email.email': 'Informe um e-mail válido',
    'password.minLength': 'A senha precisa ter pelo menos 6 caracteres',
  }
}
