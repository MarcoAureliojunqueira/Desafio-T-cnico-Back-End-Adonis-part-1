import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gateways'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
       table.increments('id') // chave primária
      table.string('name').notNullable()
      table.boolean('is_active').defaultTo(true) // ativo ou inativo
      table.integer('priority').unsigned().defaultTo(1) // prioridade

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}