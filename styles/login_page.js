import { StyleSheet, Dimensions, StatusBar } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  //Login
  login_view: {
    flex: 1,
    backgroundColor: "#ffff",
    marginTop: StatusBar.currentHeight,
  },
  login_container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  login_header_icon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  login_image: {
    width: "70%",
    height: windowHeight * 0.3,
    maxWidth: "50%",
    maxHeight: "50%",
    marginBottom: "6%",
  },
  login_input_container: {
    width: windowWidth - 55,
    position: "relative",
  },
  login_input: {
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
  login_inputicon: {
    position: "absolute",
    left: "2%",
    top: "33%",
  },
  login_button: {
    width: windowWidth - 55,
    paddingHorizontal: "10%",
    paddingVertical: "4%",
    borderRadius: 10,
    backgroundColor: "#239B56",
    marginTop: "4%",
    marginBottom: "3%",
  },
  login_text_button: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  login_footer: {
    width: windowWidth,
    height: "40%",
  },
  login_text_footer: {
    color: "#2874A6",
    fontSize: 16,
    marginTop: "4%",
    textAlign: "center",
  },
  login_img_footer: {
    marginTop: "15%",
    width: "100%",
    height: "99%",
    opacity: 0.4,
  },

  //Drawer
  header: {
    flex: 1,
  },
  header_image: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  header_text: {
    marginLeft: 9,
    fontSize: 18,
    textTransform: "uppercase",
    color: "#239B56",
    fontWeight: "bold",
  },
  header_items: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: "5%",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#000",
  },
  footer_text: {
    fontSize: 15,
    marginLeft: 4,
    color: "#239B56",
  },
  //Rates

  //Container
  rates_container: {
    backgroundColor: "#ffff",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: StatusBar.currentHeight,
  },
  //Header
  rates_header_shadow: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "9%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  rates_header_text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#239B56",
  },
  //Rates Box
  rates_box: {
    width: "95%",
    height: "30%",
    marginTop: "5%",
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "3%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#808080",
  },
  rates_title: {
    alignItems: "center",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    borderBottomWidth: 1,
    borderColor: "#808080",
  },
  rates_text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#239B56",
  },
  rates_prices: {
    width: "100%",
    marginTop: "2%",
    paddingLeft: "4%",
  },
  rates_coin: {
    marginBottom: "2%",
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },
  rates_coin_prices: {
    marginBottom: "4%",
    color: "#696969",
    fontSize: 16,
    fontWeight: "bold",
  },
  //Calculator Box
  calc_container: {
    width: "95%",
    height: "25%",
    marginTop: "5%",
    marginLeft: "2%",
    marginRight: "2%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#808080",
  },
  coin_container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  coin_box_text: {
    marginTop: "2%",
    marginLeft: "3%",
    marginRight: "2%",
    color: "#239B56",
    fontSize: 16,
    fontWeight: "bold",
  },
  view_sell: {
    position: "relative",
    width: "45%",
    height: "100%",
    marginLeft: "2%",
    marginRight: "2%",
  },
  view_get: {
    position: "relative",
    width: "45%",
    height: "100%",
    marginLeft: "2%",
  },
  text_sell: {
    marginTop: "2%",
    marginLeft: "2%",
    marginBottom: "2%",
    color: "#000",
    fontSize: 14.5,
    fontWeight: "bold",
  },
  input_sell: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A6ACAF",
    color: "#000",
    fontSize: 16,
    paddingLeft: 25,
    paddingVertical: "1%",
  },
  input_sell_icon: {
    position: "absolute",
    left: "2%",
    top: "53%",
  },
  input_get: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#A6ACAF",
    color: "#000",
    fontSize: 16,
    paddingLeft: 25,
    paddingVertical: "1%",
  },
  igual: {
    marginTop: "5%",
    fontSize: 16,
  },
  coin_buy: {
    position: "relative",
    width: "45%",
    height: "100%",
    marginTop: "4%",
    marginLeft: "2%",
    marginRight: "2%",
  },
  coin_need: {
    position: "relative",
    width: "45%",
    height: "100%",
    marginTop: "4%",
    marginLeft: "2%",
  },
  icon_coin: {
    position: "absolute",
    left: "2%",
    top: "41%",
  },
});
