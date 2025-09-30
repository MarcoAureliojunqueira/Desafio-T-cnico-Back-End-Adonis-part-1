import type { HttpContext } from '@adonisjs/core/http'
import ProductService from '#services/product_service'

export default class ProductsController {
  public async index({ response }: HttpContext) {
    return response.ok(await ProductService.getAll())
  }

  public async store({ request, response }: HttpContext) {
    const data = request.only(['name', 'amount'])
    const product = await ProductService.create(data)
    return response.created(product)
  }

  public async show({ params, response }: HttpContext) {
    const product = await ProductService.getById(params.id)
    if (!product) return response.notFound({ message: 'Produto não encontrado' })
    return response.ok(product)
  }

  public async update({ params, request, response }: HttpContext) {
    const data = request.only(['name', 'amount'])
    const product = await ProductService.update(params.id, data)
    if (!product) return response.notFound({ message: 'Produto não encontrado' })
    return response.ok(product)
  }

  public async destroy({ params, response }: HttpContext) {
    const deleted = await ProductService.delete(params.id)
    if (!deleted) return response.notFound({ message: 'Produto não encontrado' })
    return response.noContent()
  }
}
