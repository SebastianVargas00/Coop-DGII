import { View, Text, StyleSheet } from "react-native";

export default function Location() {
  return (
    <View style={styles.container}>
      <Text>Location Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
