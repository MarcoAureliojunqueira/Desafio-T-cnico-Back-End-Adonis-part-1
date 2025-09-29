import type { HttpContext } from '@adonisjs/core/http'
import ClientService from '#services/client_service'

export default class ClientsController {
  public async index({ response }: HttpContext) {
    return response.ok(await ClientService.getAll())
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'email'])
    const client = await ClientService.create(data)
    return response.created(client)
  }

  public async show({ params, response }: HttpContext) {
    const client = await ClientService.getById(params.id)
    if (!client) return response.notFound({ message: 'Cliente não encontrado' })
    return response.ok(client)
  }

  public async update({ params, request, response }: HttpContext) {
    const data = request.only(['name', 'email'])
    const client = await ClientService.update(params.id, data)
    if (!client) return response.notFound({ message: 'Cliente não encontrado' })
    return response.ok(client)
  }

  public async destroy({ params, response }: HttpContext) {
    const deleted = await ClientService.delete(params.id)
    if (!deleted) return response.notFound({ message: 'Cliente não encontrado' })
    return response.noContent()
  }
}
