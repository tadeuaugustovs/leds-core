import type { HttpContext } from '@adonisjs/core/http'
import Membro from '#models/membro'

export default class MembrosController {
  async index({ response }: HttpContext) {
    const membros = await Membro.all()
    return response.ok(membros)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nome', 'email', 'data_nascimento', 'cpf', 'telefone'])
    const membro = await Membro.create(data)
    return response.created(membro)
  }

  async show({ params, response }: HttpContext) {
    const membro = await Membro.findOrFail(params.id)
    return response.ok(membro)
  }

  async update({ params, request, response }: HttpContext) {
    const membro = await Membro.findOrFail(params.id)
    const data = request.only(['nome', 'email', 'data_nascimento', 'cpf', 'telefone'])
    membro.merge(data)
    await membro.save()
    return response.ok(membro)
  }

  async destroy({ params, response }: HttpContext) {
    const membro = await Membro.findOrFail(params.id)
    await membro.delete()
    return response.noContent()
  }
}
