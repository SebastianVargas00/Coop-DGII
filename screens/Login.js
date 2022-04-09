import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
  ImageBackground,
} from "react-native";

import Logo from "../assets/images/logo.png";
import Women from "../assets/images/woman-writing.jpg";
import { Entypo } from "@expo/vector-icons";

import { styles } from "../styles/login_page";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BtnLink from "../Components/BtnLink";



const initialUser = {
  ids: "",
  pass: "",
};

export default function Login({ navigation }) {
  const [user, setUser] = useState(initialUser);

  const handleChange = (name, text) => {
    setUser({
      ...user,
      [name]: text,
    });
  };

  function verifyData() {
    if (!user.ids.trim() || !user.pass.trim()) {
      Alert.alert("Adevertencia", "Complete los campos y intentelo de nuevo");
    } else {
      Alert.alert("Exito", "Completaste los campos", [{ text: "Ok" }]);
    }
  }

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.login_view}>
        <View style={styles.login_container}>
          <Entypo
            onPress={openDrawer}
            name="menu"
            size={40}
            color="green"
            style={styles.login_header_icon}
          />
          <Image
            source={Logo}
            style={styles.login_image}
            resizeMode="contain"
          />

          <Input
            placeholder="Cedula"
            name="ids"
            onChange={handleChange}
            icon="md-person-outline"
            secure={false}
          />

          <Input
            placeholder="Contraseña"
            name="pass"
            onChange={handleChange}
            icon="key-outline"
            secure={true}
          />

          <Button
            btnStyled={styles.login_button}
            onPress={verifyData}
            text="iniciar sesion"
            txtStyled={styles.login_text_button}
          />
        </View>
        <View style={styles.login_footer}>
          <BtnLink txtStyled={styles.login_text_footer}>
            ¿Tiene problema para Iniciar Sesión?
          </BtnLink>
          <ImageBackground
            source={Women}
            style={styles.login_img_footer}
            resizeMode="cover"
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
