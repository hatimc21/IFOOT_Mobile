import React from "react";
import { StyleSheet,Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({navigation,route}) =>{
    const pitch = route.params;
    console.log(pitch)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="chevron-left" color="#FFF" size={25}/>
                </TouchableOpacity>
                    <Feather name="shopping-cart" color="#FFF" size={25}/>
            </View>
            <Image source={pitch.img} style={styles.img}/>
            <View style={styles.count3}>
                <Text style={styles.title}>{pitch.name}</Text>
                <Text style={styles.subtitle}>{pitch.price} dh / heur</Text>
                <View style={styles.count2}>
                </View>
            <Text style={styles.text}>
                    {pitch.about}
            </Text>
            <View style={styles.cont1}>
            <FontAwesome name="heart-o" color="#000" size={25}/>
            <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#121212'
    },
    title:{
        fontSize:25,
        fontFamily:"Montserrat_700Bold",
        fontSize:30,
        marginTop:20
    },
    subtitle:{
        fontSize:20,
        color:"#474747",
        marginTop:10,
        fontFamily:"Montserrat_400Regular",
    },
    text:{
        fontFamily:"Montserrat_400Regular",
        fontSize:20,
        paddingRight:80,
        lineHeight:25
    },
    btn:{
        backgroundColor:"#E2443B",
        paddingHorizontal:60,
        paddingVertical:12,
        borderRadius:30
    },
    btnText:{
        fontFamily:"Montserrat_600SemiBold",
        fontSize:20,
        color:"#FFF"
    },
    cont1:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-between",
        marginTop:40
    },
    c3:{
        height:20,
        width:20,
        borderRadius:15,
        backgroundColor:"#529CC0",
    },
    c2:{
        height:20,
        width:20,
        borderRadius:15,
        backgroundColor:"#529C47",
    },
    c3:{
        height:20,
        width:20,
        borderRadius:15,
        backgroundColor:"#E2443B",
    },
    selected:{
        backgroundColor:"#E2443B",
        height:30,
        width:30,
        borderRadius:24,
        borderWidth:2,
        alignItems:"center",
        justifyContent:"center",
    },
    count2:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        marginVertical:25,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        paddingHorizontal:20,
        paddingTop:50,
    },
    img:{
        height:"45%",
        width:"50%",
    },
    count3:{
        flex: 1,
        backgroundColor: "#FFF",
        width: "100%",
        borderRadius:50,
        paddingHorizontal:20, 
    }
})