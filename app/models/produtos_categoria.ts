import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ProdutosCategoria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: number

  @column()
  declare categoriaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

}