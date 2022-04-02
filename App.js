import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";

export default function App() {
  const Tab = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ header: () => null }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
