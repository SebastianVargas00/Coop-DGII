import React from 'react'
import { TextInput, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { login } from '../styles/login';


const Input = ({ placeholder, name, onChange, icon }) => {
    return (
        <View style={login.input_container}>
            <TextInput
                style={login.input}
                placeholder={placeholder}
                onChangeText={(text) => onChange(name, text)}
            />
            <Ionicons
                name={icon}
                size={24}
                color="black"
                style={login.inputicon}
            />
        </View>
    )
}

export default Input