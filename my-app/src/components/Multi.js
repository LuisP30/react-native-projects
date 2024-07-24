// Arquivo com múltiplos componentes
import React from "react";
import { Text } from "react-native";
import estilo from "./estilo"; // Utilizando meu estilo (StyleSheet)

export default function Comp(){
    return <Text style={estilo.txtG}>#Comp padrão</Text>
}
export function Comp2(){
    return <Text style={estilo.txtG}>#Comp 02</Text>
}
export function Comp3(){
    return <Text style={estilo.txtG}>#Comp 03</Text>
}

// Também posso exportar desta forma:
// export { Comp2, Comp3 }
// export default Comp