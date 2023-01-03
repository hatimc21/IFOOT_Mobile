import React, { useState } from "react";
import { StyleSheet,Image,TextInput, Text, View,Pressable} from "react-native";
import { useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native"; 
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from 'expo-image-picker';

const ADD_Pitch = ({ navigation, route }) =>{
    const userid = route.params
    console.log("userid :",userid)
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const [Name, setName] = useState('');
    const [Adresse, setadresse] = useState('');
    const [Format, setformat] = useState('');
    const [Price, setprice ] = useState('');
    const [City, setcity ] = useState('');
    const form = ["4x4","5x5","6x6","7x7","8x8","9x9","10x10","11x11"];
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Name *"
                onChangeText={text => setName(text)}
                value={Name}
            />
            <TextInput
                style={styles.input}
                placeholder="Adresse *"
                secureTextEntry
                onChangeText={text => setadresse(text)}
                value={Adresse}
            />
            <SelectDropdown
                
                buttonStyle= {styles.dropdown}
                data={form}
                defaultButtonText="Select the Format of your piitch"
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
            <TextInput
                style={styles.input}
                placeholder="Format *"
                secureTextEntry
                onChangeText={text => setformat(text)}
                value={Format}
            />
            <TextInput
                style={styles.input}
                placeholder="Price *"
                secureTextEntry
                onChangeText={text => setprice(text)}
                value={Price}
            />
            <TextInput
                style={styles.input}
                placeholder="City *"
                secureTextEntry
                onChangeText={text => setcity(text)}
                value={City}
            />
             <TouchableOpacity 
                style={styles.btnimg}
                onPress={pickImage} >
                <Text>click here to pick an image from camera roll</Text>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </TouchableOpacity>
            <Text>fields with * are importent</Text>
            <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => console.log("add")}
                >
                <Text style={styles.text}>ADD</Text>
                </TouchableOpacity>

            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate(("Home"),userid)} 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                    <AntDesign name="bars" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(("ADD_Pitch"))} 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                   <AntDesign name="plus" size={24} color="black" />
                    </Pressable>
                    <Pressable 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                    <AntDesign name="profile" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(("Login"))} 
                        style={styles.IconBeahve} 
                        android_ripple={{borderless:true, radius:50}}>
                    <AntDesign name="logout" size={24} color="black" />
                    </Pressable>
                </View>

            </View>
        </View>
)
}

export default ADD_Pitch

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: "center",
      backgroundColor: "#F5F1F7",
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: "#4CAF50",
      borderWidth: 1,
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#FFF",
      fontSize: 16,
      fontFamily: "Montserrat_400Regular",
    },
    btn: {
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginTop: 10,
      backgroundColor: "#4CAF50",
    },
    text: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 16,
      color: "#FFF",
    },
    btnimg: {
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginTop: 10,
      backgroundColor: "#FFF",
    },
    dropdown: {
      width: "100%",
      height: 50,
      borderColor: "#4CAF50",
      borderWidth: 1,
      marginTop: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#FFF",
      fontSize: 16,
      fontFamily: "Montserrat_400Regular",
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
        padding: 14,
    },
  });
  