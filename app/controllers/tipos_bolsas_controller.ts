import type { HttpContext } from '@adonisjs/core/http'
import TipoBolsa from '#models/tipos_bolsa'

export default class TiposBolsasController {
  async index({ response }: HttpContext) {
    const tipos = await TipoBolsa.all()
    return response.json(tipos)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nome'])
    const tipo = await TipoBolsa.create(data)
    return response.json(tipo)
  }

  async show({ params, response }: HttpContext) {
    const tipo = await TipoBolsa.findOrFail(params.id)
    return response.json(tipo)
  }

  async update({ params, request, response }: HttpContext) {
    const tipo = await TipoBolsa.findOrFail(params.id)
    tipo.merge(request.only(['nome']))
    await tipo.save()
    return response.json(tipo)
  }

  async destroy({ params, response }: HttpContext) {
    const tipo = await TipoBolsa.findOrFail(params.id)
    await tipo.delete()
    return response.json({ message: 'Tipo de bolsa excluído com sucesso.' })
  }
}
