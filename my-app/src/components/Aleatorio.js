import React from "react";
import { Text } from "react-native";

export default (props) => (
    <Text>
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </Text>
)