import React, { useState } from "react";
import { StyleSheet,Image,TextInput, Text, View,Pressable ,Button} from "react-native";
import { TouchableOpacity } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker';
import SelectDropdown from "react-native-select-dropdown";


const LoginPage = (props) =>{
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [conpassword, setconpassword] = useState('');
    const [phone, setphone ] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [city, setcity] = useState('');
    const [country, setcountry ] = useState('');
    const form = ["Casablanca","Fez","Tangier","Marrakesh","Salé","Meknes","Rabat","Oujda"];
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
            <TextInput
            style={styles.input}
            placeholder="confirm password"
            onChangeText={text => setconpassword(text)}
            secureTextEntry={true}
            value={conpassword}
            />
            <TextInput
            style={styles.input}
            placeholder="Phone"
            onChangeText={text => setphone(text)}
            value={phone}
            />
            <Button style={styles.btnimg} title="Birth Date" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                 }}
                onCancel={() => {
                setOpen(false)
            }}
            />
            <SelectDropdown
                buttonStyle= {styles.dropdown}
                data={form}
                defaultButtonText="Select Your City"
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                    <AntDesign name="facebook-square" size={24} color="black" />
                    </Pressable>
                    <Pressable 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                   <AntDesign name="google" size={24} color="black" />
                    </Pressable>
                </View>

            </View>
            <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => props.navigation.navigate(("Home"))}
                >
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
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