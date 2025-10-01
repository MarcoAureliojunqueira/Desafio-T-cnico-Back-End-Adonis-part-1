import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import TransactionProduct from '#models/transaction_product'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare amount: number

  @hasMany(() => TransactionProduct)
  declare transactions: HasMany<typeof TransactionProduct>
}
