import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 100,
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  input_container: {
    width: "90%",
    position: "relative",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A6ACAF",
    color: "#000",
    fontSize: 16,
    paddingLeft: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  inputicon: {
    position: "absolute",
    left: 5,
    top: 22,
  },
  button: {
    width: "90%",
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#239B56",
    marginTop: 10,
    marginBottom: 15,
  },
  text_button: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  text_footer: {
    color: "#2874A6",
    fontSize: 16,
    marginTop: 25,
  },
  img_footer: {
    marginTop: 100,
    width: "100%",
    height: 250,
    opacity: 0.4,
  },
});
