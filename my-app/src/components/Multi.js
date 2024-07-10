// Arquivo com múltiplos componentes
import React from "react";
import { Text } from "react-native";

export default function Comp(){
    return <Text>#Comp padrão</Text>
}
export function Comp2(){
    return <Text>#Comp 02</Text>
}
export function Comp3(){
    return <Text>#Comp 03</Text>
}

// Também posso exportar desta forma:
// export { Comp2, Comp3 }
// export default Comp