import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import estilo from './estilo';

// Modificando dados e fazendo com que gerem impacto na nossa interface
export default ({valor = 0, passo = 1}) => {
    // useState retorna um array de dois elementos. Um número (passado como argumento e uma função altera o valor passado)
    const [numero, setNumero] = useState(valor)

    const mais = () => {
        setNumero(numero + passo)
    }
    const menos = () => {
        setNumero(numero - passo)
    }

    return (
        <>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title='+' onPress={mais}/>
            <Button title='-' onPress={menos}/>
        </>
    )
}