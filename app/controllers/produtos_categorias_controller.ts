import ProdutosCategoria from '#models/produtos_categoria'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoCategoriaController{

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await ProdutosCategoria.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await ProdutosCategoria.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['produtoId', 'categoriaId'])
        return await ProdutosCategoria.create(dados)
    }

    async update({params, request}: HttpContext){

        const produto_categoria = await ProdutosCategoria.findOrFail(params.id)
        const dados = request.only(['produtoId', 'categoriaId'])

        produto_categoria.merge(dados)
        return await produto_categoria.save()
    }

    async destroy({params}: HttpContext){
       const produto_categoria = await ProdutosCategoria.findOrFail(params.id)

    
        await produto_categoria.delete()
        return {msg: 'Registro deletado com sucesso', produto_categoria}
    }

}