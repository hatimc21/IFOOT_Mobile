import React, { useState } from "react";
import { StyleSheet,Image,TextInput, Text, View,Pressable ,Button} from "react-native";
import { TouchableOpacity } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';


const LoginPage = (props) =>{
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Mail"
            onChangeText={text => setmail(text)}
            value={mail}
            />
            <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={text => setpassword(text)}
            secureTextEntry={true}
            value={password}
            />
            <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => props.navigation.navigate(("Home"))}
                >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <Text onPress={()=> props.navigation.navigate(("Register"))} >you don't have an account ?</Text>
        </View>
    )
}
export default LoginPage
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#F5F1F7"
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
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
      },
    dropdown:{
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    btnimg:{
        backgroundColor:"#9BA100",
        paddingHorizontal:50,
        paddingVertical:12,
        borderRadius:20
    },
})