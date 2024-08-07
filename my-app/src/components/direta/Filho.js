import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default ({a, b}) => {
    return (
       <>
        <Text style={estilo.txtG}>{a}</Text>
        <Text style={estilo.txtG}>{b}</Text>
       </>
    )
}