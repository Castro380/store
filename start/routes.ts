/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CategoriaController from '#controllers/categorias_controller'
import ClientesController from '#controllers/clientes_controller'
import MarcasController from '#controllers/marcas_controller'
import PedidosController from '#controllers/pedidos_controller'
import ProdutoPedidoController from '#controllers/produto_pedidos_controller'
import ProdutoCategoriaController from '#controllers/produtos_categorias_controller'
import ProdutoController from '#controllers/produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/categorias', CategoriaController).apiOnly()
router.resource('/marcas', MarcasController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/produtos', ProdutoController).apiOnly()
router.resource('/produtos_categoria', ProdutoCategoriaController ).apiOnly()
router.resource('/pedidos', PedidosController).apiOnly()
router.resource('/produtos_pedido', ProdutoPedidoController).apiOnly()