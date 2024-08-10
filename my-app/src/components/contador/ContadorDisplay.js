import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
       </View>
    )
}

const style = StyleSheet.create({
    Display: {
        padding: 20,
        backgroundColor: '#000',
        width: 300,
    },
    DisplayText: {
        color: 'white'
    }
})