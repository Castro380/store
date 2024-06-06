import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '#models/cliente'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
     {nome: 'Castro', email: 'castro@gmail.com', endereco: 'QNN 27'},
     {nome: 'Mateus', email: 'mateus@gmail.com', endereco: 'QNN 28'},
    
    ])
  }
}