import ProdutoPedido from '#models/produto_pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
  await ProdutoPedido.createMany([
    {produtoId: 1, pedidoId: 2, quantidade: 1, precoUnitario: 25},
    {produtoId: 1, pedidoId: 2, quantidade: 1, precoUnitario: 25}

  ])
}
}