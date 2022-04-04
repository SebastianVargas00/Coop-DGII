import { StyleSheet, StatusBar, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const login = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: StatusBar.currentHeight,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: windowHeight * 0.3,
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: "6%",
  },
  input_container: {
    width: windowWidth - 55,
    position: "relative",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A6ACAF",
    color: "#000",
    fontSize: 16,
    paddingLeft: "12%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    marginTop: "3%",
    marginBottom: "2%",
  },
  inputicon: {
    position: "absolute",
    left: "2%",
    top: "33%",
  },
  button: {
    width: windowWidth - 55,
    paddingHorizontal: "10%",
    paddingVertical: "4%",
    borderRadius: 10,
    backgroundColor: "#239B56",
    marginTop: "4%",
    marginBottom: "3%",
  },
  text_button: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  footer: {
    width: windowWidth,
    height: "40%",
  },
  text_footer: {
    color: "#2874A6",
    fontSize: 16,
    marginTop: "4%",
    textAlign: "center",
  },
  img_footer: {
    marginTop: "15%",
    width: "100%",
    height: "99%",
    opacity: 0.4,
  },
});
