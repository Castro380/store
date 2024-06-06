import Marca from '#models/marca'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Marca.createMany([
      {id: 1, nome:'Nike'},
      {id: 2, nome:'Adidas'},
    ])

  }
}