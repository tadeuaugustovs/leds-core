import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bolsas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('nome').notNullable()
      table.decimal('valor', 10, 2).notNullable()
      table.integer('tipo_bolsa_id').unsigned().notNullable()
      table.string('patrocinador').notNullable()
      table.integer('quantidade_membros').unsigned().notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
