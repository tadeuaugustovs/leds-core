import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Bolsa from '#models/bolsa'

export default class extends BaseSeeder {
  public async run() {

    const dados = [
      { nome: 'BPIG-V', valor: 2700, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 61 },
      { nome: 'BPIG-I', valor: 10, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 60 },
      { nome: 'BPIG-II', valor: 7.5, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 8 },
      { nome: 'BPIG-I 60%', valor: 6, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 96 },
      { nome: 'BPIG-III', valor: 5.5, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 38 },
      { nome: 'BPIG-II 60%', valor: 4.5, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 140 },
      { nome: 'BPIG-IV', valor: 3.5, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 264 },
      { nome: 'BPIG-III 60%', valor: 3.3, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 300 },
      { nome: 'BPIG-IV 60%', valor: 2.1, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 96 },
      { nome: 'BPIG-VI', valor: 1.8, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 306 },
      { nome: 'BPIG-V 60%', valor: 1.62, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 8 },
      { nome: 'BPIG-VII', valor: 1.2, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 282 },
      { nome: 'BPIG-VIII', valor: 700, tipo_bolsa_id: 1, patrocinador: 'Fapes', quantidade_membros: 49 },
    ]

    console.log('Dados que serão inseridos:', dados)

    await Bolsa.createMany(dados)
  }
}
