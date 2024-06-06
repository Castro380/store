import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
  await Produto.createMany([
    {nome: "Moletom", preco: 100, tamanho: "G", marcaId: 1},
    {nome: "Agasalho", preco: 150, tamanho: "M", marcaId: 2}

  ])
}
}