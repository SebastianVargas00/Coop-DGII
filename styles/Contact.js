import { StyleSheet } from "react-native";
import Colors from "../theme/Colors";

const contact = StyleSheet.create({
    container:{
        
    },
    list_container:{
        backgroundColor:Colors.bg_color,
        marginHorizontal:10,
        borderColor:Colors.secondary,
        marginTop:20,

        //Shadow property
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item_container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",
        
        marginHorizontal:10,
        padding:20,
        borderBottomWidth:.9,
        alignItems:"center"
        
    },
    Item_title:{
        fontSize:15,
        color:Colors.secondary
    },
    Item_sudtitle:{
        fontSize:15,
        color:Colors.primary
    },
    Item_TextContainer:{
        marginLeft:20,
    }
})

export {contact}