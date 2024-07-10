import React from "react"
import {View} from "react-native"
import Primeiro from  './components/Primeiro'
import CompPadrao, { Comp2, Comp3 } from "./components/Multi"

export default () => (
    <View>
        {/* Meu primeiro componente */}
        <Primeiro />

        {/* Entendendo o sistema de módulos do ECMAScript */}
        <Comp2 />
        <Comp3 />
        <CompPadrao />

    </View>
)
