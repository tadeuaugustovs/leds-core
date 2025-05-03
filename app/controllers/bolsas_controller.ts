import type { HttpContext } from '@adonisjs/core/http'
import Bolsa from '#models/bolsa'

export default class BolsasController {
  async index() {
    return await Bolsa.all()
  }

  async show({ params }: HttpContext) {
    return await Bolsa.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'valor', 'tipo_bolsa_id'])
    const bolsa = await Bolsa.create(data)
    return bolsa
  }

  async update({ params, request }: HttpContext) {
    const bolsa = await Bolsa.findOrFail(params.id)
    const data = request.only(['nome', 'valor', 'tipo_bolsa_id'])
    bolsa.merge(data)
    await bolsa.save()
    return bolsa
  }

  async destroy({ params }: HttpContext) {
    const bolsa = await Bolsa.findOrFail(params.id)
    await bolsa.delete()
    return { message: 'Bolsa removida com sucesso' }
  }
}
