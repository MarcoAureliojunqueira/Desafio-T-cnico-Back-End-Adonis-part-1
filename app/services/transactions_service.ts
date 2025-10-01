import Transaction from '#models/Transaction'

export default class TransactionsService {
  async all() {
    return await Transaction.query().preload('products', (query) => {
      query.preload('product') // preload do produto dentro da pivot
    })
  }

  async findById(id: number) {
    return await Transaction.query()
      .where('id', id)
      .preload('products', (query) => {
        query.preload('product')
      })
      .firstOrFail()
  }

  async create() {
    return await Transaction.create({})
  }

  async delete(id: number) {
    const transaction = await Transaction.findOrFail(id)
    await transaction.delete()
    return { message: 'Transação removida com sucesso' }
  }
}
