import React from "react"
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import Primeiro from  './components/Primeiro'
import CompPadrao, { Comp2, Comp3 } from "./components/Multi"
import MinMax from "./components/MinMax"
import Aleatorio from "./components/Aleatorio"
import Fragment from "./components/Fragment"
import Botao from "./components/Botao"

export default () => (
    <View style={style.App}>
        {/* Barra de status em cor azul */}
        <StatusBar backgroundColor={'blue'}/> 
        {/* Meu primeiro componente */}
        <Primeiro />

        {/* Entendendo o sistema de módulos do ECMAScript */}
        <Comp2 />
        <Comp3 />
        <CompPadrao />

        {/* Componente que recebe propriedades */}
        <MinMax min={3} max="20" /> 
        {/* Para enviar um valor númerico utiliza-se um par de chaves */}

        {/* Gerando números aleatórios (passando mínimo e máximo através de propriedades) */}
        <Aleatorio min={1} max={10}/>

        {/* Aprendendo sobre React Fragment (Retornando mais de um componente) */}
        <Fragment principal={"Título"} secundario={"Secundário"} />

        {/* Trabalhando com botões */}
        <Botao />
    </View>
)

// Aplicando estilo
const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,

    },
})