import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./Components/Drawer(Login)";
import Home from "./screens/Home";


//Screens
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import Colors from "./theme/Colors";

export default function App() {
  const Tab = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Drawer(Login)">
        <Tab.Screen
          name="Drawer(Login)"
          component={Drawer}
          options={{ header: () => null }}
        ></Tab.Screen>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        ></Tab.Screen>

      <Tab.Screen
          name="Contact"
          component={Contact} 
          options={{headerTintColor:Colors.primary, headerTitleAlign:"center", headerShadowVisible:false}}
        ></Tab.Screen>

        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
