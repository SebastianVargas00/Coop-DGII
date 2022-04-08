import React from "react";
import { View, StyleSheet, Text,TouchableOpacity, TouchableWithoutFeedback} from "react-native";

import Colors from "../theme/Colors";


const CardModal = ({ closeModal, children, title }) => {
  return (
    <TouchableOpacity style={style.Container} onPress={closeModal}>
      <View style={style.ModalContainer} onStartShouldSetResponder={e=>true} onTouchEnd={(e)=>e.stopPropagation()}>
        <View style={style.ModalHeader}>
          <Text style={style.title}>{title}</Text>
          {/* <Button
            text="X"
            btnStyled={style.ModalClose}
            onPress={() => closeModal()}
          /> */}
        </View>
        <View>{children}</View>
    
      </View>
    </TouchableOpacity >
  );
};

const style = StyleSheet.create({
  Container: {
    backgroundColor: "rgba(68, 68, 68,0.5)",
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  ModalContainer:{
    backgroundColor:"white",
    flex:.5,
    borderRadius:25
    
  },
  ModalHeader: {
    padding:5
  },
  ModalClose: {
    backgroundColor: Colors.close,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:20
  },
});

export default CardModal;
