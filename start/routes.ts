import router from '@adonisjs/core/services/router'

// Importando os CONTROLLERS corretos
import MembrosController from '#controllers/membros_controller'
import TiposBolsasController from '#controllers/tipos_bolsas_controller'
import BolsasController from '#controllers/bolsas_controller'
import FluxoCaixaController from '#controllers/fluxo_caixas_controller'
import ImportacoesController from '#controllers/importacoes_controller'

// Rota padrão
router.get('/', async ({ view }) => {
  return view.render('welcome')
})

// ✅ ADICIONA ESTA ROTA NOVA para permitir o POST de atualização (driblando o spoofing)
router.post('/bolsas/:id/editar', [BolsasController, 'update'])

// Usando os CONTROLLERS nas rotas padrão
router.resource('/membros', MembrosController)
router.resource('/tipos-bolsas', TiposBolsasController)
router.resource('/bolsas', BolsasController)
router.resource('/fluxo-caixa', FluxoCaixaController)
router.resource('/importacoes', ImportacoesController)

console.log('Rotas carregando com controllers corretos!')
