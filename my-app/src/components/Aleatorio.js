import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";
// O ideal é não mexer nos valores que leem propriedades (min e max no caso abaixo). 
// Crie novas variáveis para ficar mais claro o que ta sendo feito. (Exemplo: minAlterado, maxAlterado)
// (Você não consegue mexer nos valores recebidos por propriedade)
// Também poderia fazer desestruturação assim:
// export default ({min, max}) =>
export default props => {
    // Atribuição via desestruturação
    // const {} = {}
    // Quando você tem o par de chaves ao lado direito, é um objeto, e ao lado esquerdo você está lendo os atributos de um determinado objeto
    const { min, max } = props
    const aleatorio = Math.floor(Math.random() * (max - min) + min)
    return (
        <Text style={estilo.txtG}>
            O valor aleatório entre 1 e 10 é: {aleatorio}
        </Text>
    )
}