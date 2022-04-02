import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { login } from "../styles/login";
import Logo from "../images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import Women from "../images/woman-writing.jpg";

export default function Login() {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  function verifyData() {
    if (user.length === 0 || pass.length === 0) {
      Alert.alert("Adevertencia", "Complete los campos y intentelo de nuevo");
    } else {
      Alert.alert("Exito", "Completaste los campos", [{ text: "Ok" }]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={login.view}>
        <View style={login.container}>
          <Image source={Logo} style={login.image} />
          <View style={login.input_container}>
            <TextInput
              style={login.input}
              placeholder="Cédula"
              onChangeText={(u) => setUser(u)}
            />
            <Ionicons
              name="md-person-outline"
              size={24}
              color="black"
              style={login.inputicon}
            />
          </View>
          <View style={login.input_container}>
            <TextInput
              style={login.input}
              placeholder="Constraseña"
              secureTextEntry={true}
              onChangeText={(p) => setPass(p)}
            />
            <Ionicons
              name="key-outline"
              size={24}
              color="black"
              style={login.inputicon}
            />
          </View>
          <TouchableOpacity style={login.button} onPress={verifyData}>
            <Text style={login.text_button}>iniciar sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={login.text_footer}>
              ¿Tiene problema para Iniciar Sesión?
            </Text>
          </TouchableOpacity>
          {/*Cuando el teclado se posiciona la imagen sube al tope del celular*/}
          <Image source={Women} style={login.img_footer} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
