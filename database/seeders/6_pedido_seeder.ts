import Pedido from '#models/pedido'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

  await Pedido.createMany([
    {data: new Date("2022-04-13"), status: "Enviado", clienteId: 1},
    {data: new Date("2022-04-13"), status: "Entregue", clienteId: 2}
  ])
}
}