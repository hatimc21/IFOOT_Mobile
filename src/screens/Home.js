import React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, Pressable } from "react-native";
import { useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native"; 
import { processFontFamily } from "expo-font";
import { AntDesign } from '@expo/vector-icons';

const Home = (props) =>{
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    return (
            <View style={styles.container}>
                <Image  source={require('../img/berna.jpg')} style={styles.img}/>
                <Text style={styles.title}>Berna stad</Text>
                <Text>balalallala</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => props.navigation.navigate(("Detail"))}
                >
                <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
                <View style={styles.NavContainer}>
                    <View style={styles.NavBar}>
                    <Pressable onPress={() => props.navigation.navigate(("Home"))} 
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                        <AntDesign name="bars" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => props.navigation.navigate(("ADD_Pitch"))} 
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                       <AntDesign name="plus" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => props.navigation.navigate(("Detail"))} 
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                        <AntDesign name="profile" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => props.navigation.navigate(("LoginPage"))} 
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                        <AntDesign name="logout" size={24} color="black" />
                        </Pressable>
                    </View>

                </View>
            </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#121212"
    },
    img:{
        height:"50%",
        width:"120%",
        resizeMode:"contain",
    },
    title:{
        color:'#FFF',
        fontFamily:"Montserrat_700Bold",
        fontSize:30,
        marginTop:20
    },
    text:{
        fontFamily:"Montserrat_600SemiBold",
        fontSize:30,
        color:'#FFF'
    },
    btn:{
        backgroundColor:"#E2443B",
        paddingHorizontal:60,
        paddingVertical:12,
        borderRadius:30
    },
    NavContainer:{
        position:'absolute',
        alignItems:'center',
        bottom: 20,
    },
    NavBar:{
        flexDirection:'row',
        backgroundColor:'#eee',
        width:'90%',
        justifyContent: 'space-evenly',
        borderRadius: 40 ,
    },
    IconBeahve:{
        padding: 14,
    },
})