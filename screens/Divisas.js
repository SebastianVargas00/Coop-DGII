import Tab from "../Components/Tab_Navigator";
import Rates from "../Components/Rates.js";
import { View, Dimensions } from "react-native";

function Divisas_EU() {
  return <Rates coin_type={"Euro EU€:"} icon={"euro"} />;
}

function Divisas_US() {
  return <Rates coin_type={"Dólares US$:"} icon={"dollar"} />;
}

export default function Divisas() {
  return (
    <View
      style={{
        flex: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <Tab
        name1={"US"}
        component1={Divisas_US}
        name2={"EU"}
        component2={Divisas_EU}
        icon1={"dollar"}
        alt_icon1={"dollar"}
        icon2={"euro"}
        alt_icon2={"euro"}
      />
    </View>
  );
}
