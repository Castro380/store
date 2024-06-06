import ProdutoPedido from '#models/produto_pedido'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoPedidoController{

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutoPedido.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await ProdutoPedido.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['produtoId', 'pedidoId', 'quantidade', 'precoUnitario'])
        return await ProdutoPedido.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto_pedido = await ProdutoPedido.findOrFail(params.id)
        const dados = request.only(['produtoId', 'pedidoId', 'quantidade', 'precoUnitario'])

        produto_pedido.merge(dados)
        return await produto_pedido.save()
    }

    async destroy({params}: HttpContext){
       const produto_pedido = await ProdutoPedido.findOrFail(params.id)

    
        await produto_pedido.delete()
        return {msg: 'Registro deletado com sucesso', produto_pedido}
    }

}