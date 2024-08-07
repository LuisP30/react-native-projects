// Entendendo comunicação direta
// Comunicação direta usa props (propriedades)
// Ex: App.js envia valores nas propriedades para seus componentes filhos
import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'


/* Essa é uma comunicação direita pois o componente Pai tem acesso direto ao componente filho
 - Um componente filho também pode ser pai de outro componente
 - Quando você precisa passar dados de um componente que está mais acima na árvore de componentes que está em baixo */
export default props => {
    let x = 13
    let y = 100
    return (
       <>
        <Filho a={x} b={y}/>
       </>
    )
}