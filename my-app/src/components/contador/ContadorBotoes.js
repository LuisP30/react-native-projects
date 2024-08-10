import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style={style.Container}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 5
    }
})