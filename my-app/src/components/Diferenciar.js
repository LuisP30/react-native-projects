import React from 'react'
import { Platform, Text } from 'react-native'
import estilo from './estilo'

export default _ => {
    // Não vou precisar receber props
    if(Platform.OS === 'android'){
        return <Text style={estilo.txtG}>Android</Text>
    }    
    else if(Platform.OS === 'ios'){
        return <Text style={estilo.txtG}>iOS</Text>
    }
    else {
        return <Text style={estilo.txtG}>Seu SO é: {Platform.OS}</Text>
    }
}