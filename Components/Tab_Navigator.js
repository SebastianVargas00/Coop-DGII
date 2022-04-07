import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

export default function Tab({
  name1,
  name2,
  icon1,
  alt_icon1,
  icon2,
  alt_icon2,
  component1,
  component2,
}) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === name1) {
            iconName = focused ? icon1 : alt_icon1;
            size = focused ? 25 : 22;
            color = focused ? "#239B56" : "#696969";
          } else if (route.name === name2) {
            iconName = focused ? icon2 : alt_icon2;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#239B56",
        tabBarInactiveTintColor: "#696969",
        headerShown: false,
      })}
    >
      <Tab.Screen name={name1} component={component1} />
      <Tab.Screen name={name2} component={component2} />
    </Tab.Navigator>
  );
}
