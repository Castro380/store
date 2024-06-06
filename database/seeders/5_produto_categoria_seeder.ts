import ProdutosCategoria from '#models/produtos_categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
  await ProdutosCategoria.createMany([
    {produtoId: 1, categoriaId: 2 },
    {produtoId: 2, categoriaId: 1 }

  ])
}
}