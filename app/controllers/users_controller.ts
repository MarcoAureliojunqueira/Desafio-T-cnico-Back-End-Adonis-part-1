import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/user_service'


export default class UsersController {
  private userService = new UserService()

  public async index({}: HttpContext) {
    return await this.userService.listAll()
  }

  public async store({ request }: HttpContext) {
  const data = request.only(['full_name', 'email', 'password'])
  return await this.userService.create(data)
}



  public async show({ params }: HttpContext) {
    return await this.userService.findById(params.id)
  }

  public async update({ params, request }: HttpContext) {
    const data = request.only(['full_name', 'email', 'password'])
    return await this.userService.update(params.id, data)
  }

  public async destroy({ params, response }: HttpContext) {
    await this.userService.delete(params.id)
    return response.noContent()
  }
}
