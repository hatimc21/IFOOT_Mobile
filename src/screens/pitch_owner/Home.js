import React from "react";
import { StyleSheet, Image, Text, View, Pressable, FlatList, Dimensions,SafeAreaView } from "react-native";
import { useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
import pitches from "../../const/pitches";
import COLORS from "../../const/colors";
const width = Dimensions.get("screen").width/2-30;
const Home = (props) =>{
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const Card = ({pitch})=>{
        return (
         <TouchableOpacity onPress={() => props.navigation.navigate("Detail",pitch)}>
             <View style={styles.card}>
         <View  style={{height: 90, alignItems: 'center'}}>
             <Image style={{flex:1, resizeMode:'contain'}} source={pitch.img}/>
         </View>
         <Text style={{fontWeight:"bold",fontSize:17, marginTop:10}}>
             {pitch.name}
         </Text>
         <View
                 style={{
                   flexDirection: 'row',
                   justifyContent: 'space-between',
                   marginTop: 5,
                 }}>
                 <Text style={{fontSize: 19, fontWeight: 'bold'}}>
                   {pitch.price} dh/h
                 </Text>
                 <View
                   style={{
                     height: 25,
                     width: 25,
                     backgroundColor: COLORS.green,
                     borderRadius: 5,
                     justifyContent: 'center',
                     alignItems: 'center',
                   }}>
                   <Text
                     style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                     +
                   </Text>
                 </View>
         </View>
        </View>
         </TouchableOpacity>
        );
     };
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
                    <Text style={{fontSize: 38, color: '#00B761', fontWeight: 'bold'}}>
                        IFOOT
                    </Text>
                </View>
                <FlatList 
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    contentContainerStyle={{
                        marginTop:10,
                        paddingBottom:50,
                    }}
                    numColumns={2} data={pitches}
                    renderItem={({item}) => {
                        return <Card pitch={item} />;
                      }}
                    />
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
                        <Pressable
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                        <AntDesign name="profile" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => props.navigation.navigate(("Login"))} 
                            style={styles.IconBeahve} 
                            android_ripple={{borderless:true, radius:50}}>
                        <AntDesign name="logout" size={24} color="black" />
                        </Pressable>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#fff"
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
    card:{
        height:225,
        backgroundColor:"#eee",
        width,
        marginHorizontal:2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
})