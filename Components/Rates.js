import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/login_page";

export default function Rates({ coin_type, icon }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.rates_container}>
        {/*Header*/}
        <View style={styles.rates_header_shadow}>
          <Text style={styles.rates_header_text}>Divisas</Text>
        </View>
        {/*Rates*/}
        <View style={styles.rates_box}>
          <View style={styles.rates_title}>
            <Text style={styles.rates_text}>Tasa de cambio</Text>
          </View>
          <View style={styles.rates_prices}>
            <Text style={styles.rates_coin}>Dólares:</Text>
            <Text style={styles.rates_coin_prices}>
              Compra:RD$ 54.30 | Venta:RD$ 55.60
            </Text>
            <Text style={styles.rates_coin}>Euros:</Text>
            <Text style={styles.rates_coin_prices}>
              Compra:RD$ 59.30 | Venta:RD$ 62.65
            </Text>
          </View>
        </View>
        {/*US Box*/}
        <View style={styles.calc_container}>
          <Text style={styles.coin_box_text}>{coin_type}</Text>
          <View style={styles.coin_container}>
            <View style={styles.view_sell}>
              <Text style={styles.text_sell}>Si quieres vender:</Text>
              <TextInput
                style={styles.input_sell}
                placeholder="0.00"
                keyboardType="numeric"
              />
              <FontAwesome
                name={icon}
                size={22}
                color="black"
                style={styles.input_sell_icon}
              />
            </View>
            <Text style={styles.igual}>=</Text>
            <View style={styles.view_get}>
              <Text style={styles.text_sell}>Recibes</Text>
              <TextInput
                style={styles.input_get}
                placeholder="0.00"
                editable={false}
              />
              <FontAwesome
                name={icon}
                size={22}
                color="black"
                style={styles.input_sell_icon}
              />
            </View>
          </View>
          <View style={styles.coin_container}>
            <View style={styles.coin_buy}>
              <Text style={styles.text_sell}>Si quieres comprar:</Text>
              <TextInput
                style={styles.input_get}
                placeholder="0.00"
                keyboardType="numeric"
              />
              <FontAwesome
                name={icon}
                size={22}
                color="black"
                style={styles.icon_coin}
              />
            </View>
            <Text style={styles.igual}>=</Text>
            <View style={styles.coin_need}>
              <Text style={styles.text_sell}>Necesitas:</Text>
              <TextInput
                style={styles.input_get}
                placeholder="0.00"
                editable={false}
              />
              <FontAwesome
                name={icon}
                size={22}
                color="black"
                style={styles.icon_coin}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
