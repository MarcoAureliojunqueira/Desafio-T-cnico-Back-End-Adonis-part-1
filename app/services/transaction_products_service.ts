import TransactionProduct from '#models/transaction_product'

export default class TransactionProductsService {
  async all() {
    return await TransactionProduct.query().preload('product').preload('transaction')
  }

  async findById(id: number) {
    return await TransactionProduct.query()
      .where('id', id)
      .preload('product')
      .preload('transaction')
      .firstOrFail()
  }

  async create(data: { transactionId: number; productId: number; quantity: number }) {
    return await TransactionProduct.create(data)
  }

  async update(id: number, data: { quantity?: number }) {
    const tp = await TransactionProduct.findOrFail(id)
    tp.merge(data)
    await tp.save()
    return tp
  }

  async delete(id: number) {
    const tp = await TransactionProduct.findOrFail(id)
    await tp.delete()
    return { message: 'Produto removido da transação com sucesso' }
  }
}
