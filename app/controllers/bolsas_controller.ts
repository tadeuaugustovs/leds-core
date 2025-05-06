import type { HttpContext } from '@adonisjs/core/http'
import Bolsa from '#models/bolsa'

export default class BolsasController {
  async index({ view }: HttpContext) {
    const bolsas = await Bolsa.all()
    return view.render('bolsas/index', { bolsas })
  }

  async show({ params }: HttpContext) {
    return await Bolsa.findOrFail(params.id)
  }

  async create({ view }: HttpContext) {
    return view.render('bolsas/create')  // Para o formulário de criação
  }

  async edit({ params, view }: HttpContext) {
    const bolsa = await Bolsa.findOrFail(params.id)
    return view.render('bolsas/edit', { bolsa })
  }

  async store({ request, response }: HttpContext) {
    console.log('Método recebido em STORE:', request.method())  // <--- Log para depuração
    const data = request.only([
      'nome',
      'valor',
      'tipo_bolsa_id',
      'patrocinador',
      'quantidade_membros'
    ])

    await Bolsa.create(data)
    return response.redirect('/bolsas')  // Redireciona para a lista após adicionar
  }

  async update({ params, request, response }: HttpContext) {
    console.log('Método recebido em UPDATE:', request.method())  // <--- Log para depuração

    const bolsa = await Bolsa.findOrFail(params.id)

    const data = request.only([
      'nome',
      'valor',
      'tipo_bolsa_id',
      'patrocinador',
      'quantidade_membros'
    ])

    bolsa.merge(data)
    await bolsa.save()

    return response.redirect('/bolsas')  // Redireciona para a lista após editar
  }

  async destroy({ params, response }: HttpContext) {
    const bolsa = await Bolsa.findOrFail(params.id)
    await bolsa.delete()
    return response.redirect('/bolsas')
  }
}
