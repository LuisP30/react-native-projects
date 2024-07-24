// Meu primeiro componente
import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo'; // Utilizando meu arquivo de estilo (StyleSheet)

export default () => {
    console.warn('Luis')
    return (
        <Text style={estilo.txtG}>Primeiro!</Text>
    )

}