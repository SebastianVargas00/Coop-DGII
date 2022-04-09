import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../screens/Login";
import Contact from "../screens/Contact";
import Divisas from "../screens/Divisas";
import Location from "../screens/Location";
import DrawerItems from "./DrawerItems";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../theme/Colors";

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { fontSize: 16, marginLeft: -20 },
        drawerActiveBackgroundColor: "#239B56",
        drawerActiveTintColor: "#ffff",
        drawerInactiveTintColor: "#333",
      }}
      drawerContent={(props) => <DrawerItems {...props} />}
    >
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Divisas"
        component={Divisas}
        options={{
          drawerIcon: ({ color }) => (
            <Fontisto name="money-symbol" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Location"
        component={Location}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="location-pin" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacto"
        component={Contact}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
          headerTintColor:Colors.primary,
           headerTitleAlign:"center", 
           headerShadowVisible:false
        }}
      />
    </Drawer.Navigator>
  );
}
