import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View, Pressable, Switch,ScrollView, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import SelectDropdown from "react-native-select-dropdown";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";


const Register = (props) => {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const [isEnabled, setIsEnabled] = useState(false);
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [conpassword, setconpassword] = useState('');
    const [phone, setphone] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [open, setOpen] = useState(false)
    const [city, setcity] = useState('');
    const [country, setcountry] = useState('');
    const form = ["Casablanca", "Fez", "Tangier", "Marrakesh", "Salé", "Meknes", "Rabat", "Oujda"];
    function nchofconsole() {
        console.log(selectedDate);
        console.log(city);
    }
    console.log(isEnabled);
    const nchof = ()=>{
        console.log(isEnabled);
        if (isEnabled){
            console.log(1)
        } else {console.log(2)}
    }
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
            <Text style={styles.tex}>Select your birth day</Text>
            <DatePicker
                onSelectedChange={date => setSelectedDate(date)}
                options={{
                    backgroundColor: '#090C08',
                    textHeaderColor: '#FFA25B',
                    textDefaultColor: '#F6E7C1',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',

                }}
                current="2022-01-01"
                selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
                mode="calendar"
                minuteInterval={30}
                style={styles.datep}
                value={selectedDate}
            />
            <SelectDropdown
                buttonStyle={styles.dropdown}
                data={form}
                defaultButtonText="Select Your City"
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setcity(selectedItem);
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                value={city}
            />
            <View>
                <Text>pitch owner ?</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
            </View>
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable
                        style={styles.IconBeahve}
                        android_ripple={{ borderless: true, radius: 50 }}>
                        <AntDesign name="facebook-square" size={24} color="black" />
                    </Pressable>
                    <Pressable
                        style={styles.IconBeahve}
                        android_ripple={{ borderless: true, radius: 50 }}>
                        <AntDesign name="google" size={24} color="black" />
                    </Pressable>
                </View>

            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={nchof}
            >
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Register
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F1F7"
    },
    contentContainer: {
        alignItems: 'center', // This is the fix for the error
    },
    img: {
        height: "50%",
        width: "120%",
        resizeMode: "contain",
    },
    title: {
        color: '#FFF',
        fontFamily: "Montserrat_700Bold",
        fontSize: 30,
        marginTop: 20
    },
    text: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 16,
        color: "#FFF"
    },
    btn: {
        backgroundColor: "#4CAF50",
        width: "80%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    NavContainer: {
        paddingTop: 15,
        position: 'relative',
        alignItems: 'center',
        bottom: 25,
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,
    },
    IconBeahve: {
        padding: 14,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#4CAF50",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FFF"
    },
    datep: {
        width: '75%',
        height: '30%',
        borderRadius: 10,
    },
    dropdown: {
        paddingVertical: 2,
        width: '80%',
        height: 40,
        borderColor: '#4CAF50',
        borderRadius: 5,
        borderWidth: 1,
        margin: 10,
    },
})