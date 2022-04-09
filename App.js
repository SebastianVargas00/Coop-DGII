import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//Screens
import Login from "./screens/Login";
import Contact from "./screens/Contact";
import Colors from "./theme/Colors";

export default function App() {
  const Tab = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Login"
          component={Login}
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
