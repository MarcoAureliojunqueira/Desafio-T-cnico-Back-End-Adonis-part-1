import type { HttpContext } from '@adonisjs/core/http'
import GatewayService from '../services/gateway_service.js'

export default class GatewaysController {
  public async index({ response }: HttpContext) {
    const gateways = await GatewayService.getAll()
    return response.ok(gateways)
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'isActive', 'priority'])
    const gateway = await GatewayService.create(data)
    return response.created(gateway)
  }

  public async show({ params, response }: HttpContext) {
    const gateway = await GatewayService.getById(params.id)
    if (!gateway) return response.notFound({ message: 'Gateway não encontrado' })
    return response.ok(gateway)
  }

  public async update({ params, request, response }: HttpContext) {
    const data = request.only(['name', 'isActive', 'priority'])
    const gateway = await GatewayService.update(params.id, data)
    if (!gateway) return response.notFound({ message: 'Gateway não encontrado' })
    return response.ok(gateway)
  }

  public async destroy({ params, response }: HttpContext) {
    const deleted = await GatewayService.delete(params.id)
    if (!deleted) return response.notFound({ message: 'Gateway não encontrado' })
    return response.noContent()
  }
}
