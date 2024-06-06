import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Marca from './marca.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
 declare nome: string

 @column()
 declare preco: number

 @column()
 declare tamanho: string

 @column()
  declare marcaId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Marca)
  declare marca: BelongsTo<typeof Marca>
}