import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => {
    return <Text style={estilo.txtG}>O número {props.num} é {props.num % 2 == 0?'par':'impar'} </Text>
}