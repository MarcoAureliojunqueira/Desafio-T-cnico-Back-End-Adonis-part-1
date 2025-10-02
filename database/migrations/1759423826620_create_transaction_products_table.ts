import { BaseSchema } from '@adonisjs/lucid/schema'

export default class TransactionProductsSchema extends BaseSchema {
  protected tableName = 'transaction_products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('transaction_id')
        .unsigned()
        .references('id')
        .inTable('transactions')
        .onDelete('CASCADE')

      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')

      table.integer('quantity').notNullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}