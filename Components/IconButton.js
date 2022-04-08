import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Colors from '../theme/Colors'


const IconButton = ({handlePress, icon,title}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={style.container}>
      <View style={style.body}>
        {icon}
        <Text style={style.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:Colors.bg_color,
        width:120,
        height:120,
        borderRadius:20,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
    },
    body:{
      flex:1, 
      justifyContent:"center", 
      alignItems:"center"
    },
    
    text:{
      textAlign:"center",
      textAlignVertical:"bottom",
      fontSize:20,
      marginTop:10
    }
})


export default IconButton

