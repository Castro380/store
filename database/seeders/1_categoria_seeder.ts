import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Categoria.createMany([
      {id: 1, nome:'Camisas'},
      {id: 2, nome:'Calças'},
    ])

  }
}