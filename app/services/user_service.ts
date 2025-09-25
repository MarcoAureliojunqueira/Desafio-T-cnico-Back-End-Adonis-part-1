import User from '#models/user'

export default class UserService {
  // Listar todos os usuários
  public async listAll() {
    return await User.all()
  }

  // Criar um usuário
  public async create(data: { username: string; email: string; password: string }) {
    // Aqui você poderia adicionar lógica extra: hash de senha, validações adicionais, envio de e-mail etc.
    const user = await User.create(data)
    return user
  }

  // Buscar usuário por ID
  public async findById(id: number) {
    return await User.findOrFail(id)
  }

  // Atualizar usuário
  public async update(id: number, data: { username?: string; email?: string; password?: string }) {
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return user
  }

  // Deletar usuário
  public async delete(id: number) {
    const user = await User.findOrFail(id)
    await user.delete()
    return true
  }
}
