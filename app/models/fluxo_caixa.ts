import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class FluxoCaixa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tipo: string

  @column()
  declare descricao: string

  @column()
  declare valor: number

  @column()
  declare data: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
