import Categoria from '#models/categoria'
import type { HttpContext } from '@adonisjs/core/http'


export default class CategoriaController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Categoria.query().preload('produtocategoria').paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Categoria.query()
                                .where('id', params.id)
                                .preload('produtocategoria')
                                .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome'])
        return await Categoria.create(dados)
    }

    async update({params, request}: HttpContext){

        const categoria = await Categoria.findOrFail(params.id)
        const dados = request.only(['nome'])

        categoria.merge(dados)
        return await categoria.save()
    }

    async destroy({params}: HttpContext){
       const categoria = await Categoria.findOrFail(params.id)

    
        await categoria.delete()
        return {msg: 'Registro deletado com sucesso', categoria}
    }

} 