import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { contact } from '../styles/Contact';
import contanctUs from "../assets/images/contanctUs.png"
import { View, FlatList, Text, Image, Dimensions, Modal } from 'react-native';
import Colors from '../theme/Colors';
import Item from '../Components/Item';
import IconButton from '../Components/IconButton';
import useModal from '../hooks/useModal';



const {width, height} = Dimensions.get("window")

const Contact = () => {
    const [isCallModalOpen, openCallModal, closeCallModal] = useModal()
    const [isEmailModalOpen, openEmailModal, closeEmailModal] = useModal()


  return (
      <View style={{flex:1, backgroundColor:Colors.bg_color}}>
          <View style={{backgroundColor:"red", flex:.5, justifyContent:"center"}}>
              <Image source={contanctUs} 
              resizeMode="contain" 
              style={{maxWidth:width}}/>
          </View>
          <View style={{flex:1}}>
                <Text style={{textAlign:"center", marginBottom:10}}>How can i help you?</Text>
                <Text style={{textAlign:"center", marginHorizontal:30}}>It looks like you are experiencing problems with our sign up process. We are here to help so please get in touch with us</Text>
                <View style={{flex:1,flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                    <IconButton 
                        title="Call to us"
                        handlePress={()=>console.log("d")}
                        icon={<MaterialIcons name="phone-iphone" size={35} color={Colors.primary} />}    
                    />

                    <IconButton 
                        title="Email us"
                        handlePress={()=>console.log("d")}
                        icon={<MaterialIcons name="email" size={35} color={Colors.primary} />}    
                    />
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={isCallModalOpen}
                ></Modal>

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={isEmailModalOpen}
                ></Modal>
          </View>
      </View>















    // <View style={contact.container}>
    //     <View style={contact.list_container}>
    //         <FlatList
    //             data={Links}
    //             renderItem={({item, key})=>(
    //                 <Item 
    //                     icon={item.icon} 
    //                     title={item.title} 
    //                     sudtitle={item.sudtitle} 
    //                     ItemStyled={contact.item_container}
    //                     TitleStyled={contact.Item_title}
    //                     sudStyle={contact.Item_sudtitle}
    //                     ItemTextStyled={contact.Item_TextContainer}
    //                 />
    //             )}
    //             keyExtractor={(item)=>item.idx}
    //         />
    //     </View>
    //     <View style={{flex:2}}>
    //                 <Text>Hola</Text>
    //     </View>
    // </View>
  )
}


const Links = [
    {
        idx:1,
        icon:<MaterialIcons name="phone-iphone" size={24} color={Colors.secondary} />,
        title:"Centro de contacto",
        sudtitle:"(809)-243-0000"
    },
    {
        idx:2,
        icon:<FontAwesome5 name="globe" size={24} color={Colors.secondary}/>,
        title:"Llamas desde el exterior",
        sudtitle:"1-000-000-0000"
    },
    {
        idx:3,
        icon:<MaterialIcons name="email" size={24} color={Colors.secondary} />,
        title:"Correo electronico",
        sudtitle:"cliente@gmail.com"
    },
    {
        idx:4,
        icon:<AntDesign name="facebook-square" size={24} color={Colors.secondary}  />,
        title:"Facebook",
        sudtitle:"/banco_RD"
    },
    {
        idx:5,
        icon:<AntDesign name="twitter" size={24} color={Colors.secondary}  />,
        title:"Twitter",
        sudtitle:"@banco_RD",
    },
    {
        idx:6,
        icon:<AntDesign name="instagram" size={24} color={Colors.secondary} />,
        title:"Instagram",
        sudtitle:"@Banco_RD2"
    }
]

export default Contact