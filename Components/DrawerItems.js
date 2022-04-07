import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { styles } from "../styles/login_page";
import { Entypo } from "@expo/vector-icons";
import Logo from "../assets/images/logo.png";

const CustomDrawer = (props) => {
  return (
    <View style={styles.header}>
      <StatusBar translucent backgroundColor="#239B56" animated />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ffff" }}
      >
        <View style={styles.header_image}>
          <Image
            source={Logo}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <Text style={styles.header_text}>CoopDGII</Text>
        </View>
        <View style={styles.header_items}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="help" size={24} color="black" />
            <Text style={styles.footer_text}>Necesita Ayuda</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
