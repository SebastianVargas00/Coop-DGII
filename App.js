import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./Components/Drawer(Login)";
import Home from "./screens/Home";


//Screens


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


        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
