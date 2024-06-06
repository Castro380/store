import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produto_pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().references('id').inTable('produtos')
      table.integer('pedido_id').unsigned().references('id').inTable('pedidos')
      table.integer('quantidade', 200).nullable()
      table.decimal('preco_unitario').notNullable()
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}