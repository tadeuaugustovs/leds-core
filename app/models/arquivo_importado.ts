import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Importacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome_arquivo: string

  @column()
  declare tipo: string

  @column()
  declare status: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
