import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

// Sem usar o React Fragment gerará um erro relacionado a elementos JSX adjacentes
// Também posso usar <Fragment></Fragment> (Importar no react)
// Também posso usar tags vazias: <> </>
export default (props) =>  (
    <React.Fragment>
        <Text style={estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
)
