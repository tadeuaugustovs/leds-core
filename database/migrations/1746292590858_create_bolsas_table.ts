import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bolsas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('membro_id').unsigned().references('id').inTable('membros').onDelete('CASCADE')
      table.integer('tipo_bolsa_id').unsigned().references('id').inTable('tipos_bolsas').onDelete('SET NULL')
      table.date('data_inicio').notNullable()
      table.date('data_fim').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
