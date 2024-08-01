import React from "react";
import { Button } from "react-native";

// Função para ser passada como referência ao onPress
function executar2(){
    console.warn('Executando 2')
}

// onPress recebe uma função anônima ou a referência de uma função
export default props => {
    return (
        <>
            <Button title="Executar" color={'black'} onPress={() => {
                console.warn('Executando')
            }}/>
            <Button title="Executar 2" onPress={executar2}/>
        </>
    )
}