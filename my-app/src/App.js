import React from "react"
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native"
import Primeiro from  './components/Primeiro'
import CompPadrao, { Comp2, Comp3 } from "./components/Multi"

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

        
    </View>
)

// Aplicando estilo
const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})