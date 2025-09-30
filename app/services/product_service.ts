import Product from '#models/produt'

interface ProductData {
  name: string
  amount: number
}

export default class ProductService {
  public static async getAll() {
    return Product.all()
  }

  public static async getById(id: number) {
    return Product.find(id)
  }

  public static async create(data: ProductData) {
    return Product.create(data)
  }

  public static async update(id: number, data: ProductData) {
    const product = await Product.find(id)
    if (!product) return null

    product.merge(data)
    await product.save()
    return product
  }

  public static async delete(id: number) {
    const product = await Product.find(id)
    if (!product) return false

    await product.delete()
    return true
  }
}
