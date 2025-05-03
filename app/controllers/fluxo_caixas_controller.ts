import type { HttpContext } from '@adonisjs/core/http'
import FluxoCaixa from '#models/fluxo_caixa'

export default class FluxoCaixasController {
  async index() {
    return await FluxoCaixa.all()
  }

  async show({ params }: HttpContext) {
    return await FluxoCaixa.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const data = request.only(['descricao', 'valor', 'tipo', 'data'])
    const fluxo = await FluxoCaixa.create(data)
    return fluxo
  }

  async update({ params, request }: HttpContext) {
    const fluxo = await FluxoCaixa.findOrFail(params.id)
    const data = request.only(['descricao', 'valor', 'tipo', 'data'])
    fluxo.merge(data)
    await fluxo.save()
    return fluxo
  }

  async destroy({ params }: HttpContext) {
    const fluxo = await FluxoCaixa.findOrFail(params.id)
    await fluxo.delete()
    return { message: 'Lançamento removido com sucesso' }
  }
}
