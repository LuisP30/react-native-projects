import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Membro from './Membro'

export default props => {
    return (
       <>
            <Text>Membros da familia</Text>
            {/* Nem precisei acessar Membro.js para mostrar o nome dos membros da familia */}
            {props.children} {/* Pegando os filhos que foram passados para esse componente (Em App) */}
       </>
    )
}