import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    // Propriedade key no Text
    function obterLista(){
       return Produtos.map(p => {
            return <Text key={p.id}>{p.id}) {p.nome} tem preço R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={estilo.txtG}>Lista de produtos</Text>
            {obterLista()}
       </>
    )
}