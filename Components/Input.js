import React from "react";
import { TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/login_page";

const Input = ({ placeholder, name, onChange, icon, secure }) => {
  return (
    <View style={styles.login_input_container}>
      <TextInput
        style={styles.login_input}
        placeholder={placeholder}
        onChangeText={(text) => onChange(name, text)}
        secureTextEntry={secure}
      />
      <Ionicons
        name={icon}
        size={24}
        color="black"
        style={styles.login_inputicon}
      />
    </View>
  );
};

export default Input;
