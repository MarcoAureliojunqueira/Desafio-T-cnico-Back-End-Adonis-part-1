import type { HttpContext } from '@adonisjs/core/http'
import TransactionsService from '#services/transactions_service'

export default class TransactionsController {
  private service = new TransactionsService()

  async index({ response }: HttpContext) {
    return response.ok(await this.service.all())
  }

  async show({ params, response }: HttpContext) {
    return response.ok(await this.service.findById(params.id))
  }

  async store({ response }: HttpContext) {
    return response.created(await this.service.create())
  }

  async destroy({ params, response }: HttpContext) {
    return response.ok(await this.service.delete(params.id))
  }
}
