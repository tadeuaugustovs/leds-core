import type { HttpContext } from '@adonisjs/core/http'
import Importacao from '#models/arquivo_importado'

export default class ImportacoesController {
  async index({ response }: HttpContext) {
    const importacoes = await Importacao.all()
    return response.json(importacoes)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nome_arquivo', 'tipo', 'status'])
    const importacao = await Importacao.create(data)
    return response.json(importacao)
  }

  async show({ params, response }: HttpContext) {
    const importacao = await Importacao.findOrFail(params.id)
    return response.json(importacao)
  }

  async update({ params, request, response }: HttpContext) {
    const importacao = await Importacao.findOrFail(params.id)
    importacao.merge(request.only(['nome_arquivo', 'tipo', 'status']))
    await importacao.save()
    return response.json(importacao)
  }

  async destroy({ params, response }: HttpContext) {
    const importacao = await Importacao.findOrFail(params.id)
    await importacao.delete()
    return response.json({ message: 'Importação excluída com sucesso.' })
  }
}
