import type { HttpContext } from '@adonisjs/core/http'
import TransactionProductsService from '#services/transaction_products_service'

export default class TransactionProductsController {
  private service = new TransactionProductsService()

  async index({ response }: HttpContext) {
    return response.ok(await this.service.all())
  }

  async show({ params, response }: HttpContext) {
    return response.ok(await this.service.findById(params.id))
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['transactionId', 'productId', 'quantity'])
    return response.created(await this.service.create(data))
  }

  async update({ params, request, response }: HttpContext) {
    const data = request.only(['quantity'])
    return response.ok(await this.service.update(params.id, data))
  }

  async destroy({ params, response }: HttpContext) {
    return response.ok(await this.service.delete(params.id))
  }
}

