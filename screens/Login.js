import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
} from "react-native";


import Logo from "../assets/images/logo.png";
import Women from "../assets/images/woman-writing.jpg";

import { login } from "../styles/login";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BtnLink from "../Components/BtnLink";



const initialUser = {
  ids: "",
  pass: ""
}

export default function Login() {
  const [user, setUser] = useState(initialUser)

  const handleChange = (name, text) => {
    setUser({
      ...user,
      [name]: text
    })

  }

  function verifyData() {
    if (!user.ids.trim() || !user.pass.trim()) {
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


          <Input
            placeholder="Cedula"
            name="ids"
            onChange={handleChange}
            icon="md-person-outline"
          />

          <Input
            placeholder="Contraseña"
            name="pass"
            onChange={handleChange}
            icon="key-outline"
          />


          <Button
            btnStyled={login.button}
            onPress={verifyData}
            text="iniciar sesion"
            txtStyled={login.text_button}
          />
          <BtnLink
            txtStyled={login.text_footer}>
            ¿Tiene problema para Iniciar Sesión?
          </BtnLink>




          {/*Cuando el teclado se posiciona la imagen sube al tope del celular*/}
          <Image source={Women} style={login.img_footer} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
