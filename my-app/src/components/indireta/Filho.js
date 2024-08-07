import React from 'react'
import { Button } from 'react-native'
import estilo from '../estilo'

// Altera o valor sempre que clica no botão
export default ({min, max, funcao}) => {

    function gerarNumero(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    return (
       <Button title='Executar' onPress={() => {
        const n = gerarNumero(min, max)
        funcao(n)
       }} />
    )
}