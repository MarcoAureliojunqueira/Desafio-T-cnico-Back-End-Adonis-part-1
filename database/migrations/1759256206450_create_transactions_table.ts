import { BaseSchema } from '@adonisjs/lucid/schema'

export default class TransactionsSchema extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('client').notNullable()
      table.string('gateway').notNullable()
      table.string('external_id').notNullable()
      table.string('status').notNullable()
      table.decimal('amount', 12, 2).notNullable()
      table.string('card_last_numbers', 4).nullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
