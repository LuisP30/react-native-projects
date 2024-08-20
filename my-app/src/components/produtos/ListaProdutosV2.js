import React from 'react'
import { Text, FlatList } from 'react-native'
import estilo from '../estilo'
import Produtos from './Produtos'

export default props => {
    return (
        <>
            <Text style={estilo.txtG}>Lista de Produtos</Text>
            {/* keyExtractor recebe o item e retorna o id do item */}
            {/* renderItem pode receber a referência de uma função também */}
            <FlatList keyExtractor={ i => i.id } data={Produtos} renderItem={ ( {item} ) => {
                return <Text>{item.id} {item.nome} - R${item.preco}</Text>
            } }/>
       </>
    )
}