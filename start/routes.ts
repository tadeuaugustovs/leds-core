import router from '@adonisjs/core/services/router'

// Importando os CONTROLLERS corretos (não os models!)
import MembrosController from '#controllers/membros_controller'
import TiposBolsasController from '#controllers/tipos_bolsas_controller'
import BolsasController from '#controllers/bolsas_controller'
import FluxoCaixaController from '#controllers/fluxo_caixas_controller'
import ImportacoesController from '#controllers/importacoes_controller'

// Rota padrão
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Usando os CONTROLLERS nas rotas
router.resource('/membros', MembrosController)
router.resource('/tipos-bolsas', TiposBolsasController)
router.resource('/bolsas', BolsasController)
router.resource('/fluxo-caixa', FluxoCaixaController)
router.resource('/importacoes', ImportacoesController)

console.log('Rotas carregando com controllers corretos!');
