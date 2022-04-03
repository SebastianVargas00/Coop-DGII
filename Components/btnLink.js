import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const BtnLink = ({ txtStyled, children }) => {
    return (
        <TouchableOpacity>
            <Text
                style={txtStyled}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default BtnLink