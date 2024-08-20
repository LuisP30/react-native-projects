import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('')
    return (
       <View style={estilo.txtG}>
        {/* TextInput é conhecido como um componente não controlado */}
        {/* Componente controlado está vinculado a um determinado dado
        dentro de um componente. Ele só será modificado quando o valor que ele está vinculado
        também for */}
        {/* Eu utilizo o onChangeText para torná-lo em um componente controlado */}
            <TextInput 
                placeholder='Digite o seu nome'
                value={nome}
                onChangeText={texto => setNome(texto)}
            />
       </View>
    )
}