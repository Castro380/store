
import Produto from '#models/produto'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoController{

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Produto.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Produto.query()
                            .where('id', params.id)
                            .preload('marca')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'preco', 'tamanho', 'marcaId'])
        return await Produto.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'tamanho', 'marcaId'])

        produto.merge(dados)
        return await produto.save()
    }

    async destroy({params}: HttpContext){
       const produto = await Produto.findOrFail(params.id)

    
        await produto.delete()
        return {msg: 'Registro deletado com sucesso', produto}
    }

}