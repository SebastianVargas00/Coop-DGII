import React from 'react'
import { TouchableOpacity, Text } from "react-native"


const Button = ({ btnStyled, onPress, text, txtStyled }) => {
    return (
        <TouchableOpacity
            style={btnStyled ? btnStyled : null}
            onPress={onPress}
        >
            <Text style={txtStyled}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button