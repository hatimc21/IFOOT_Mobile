import React, { useState,useEffect } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { AntDesign } from "@expo/vector-icons";
import users from "../const/Users";


const LoginPage = (props) => {
    const [mail, setmail] = useState('');
    const [password, setpassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const handleLogin = () => {
        // Find the user with the matching email and password
        const user = users.find(user => user.email === mail && user.password === password);
        if (user) {
          // User was found, navigate to the "Home" screen
          if(user.role == 1){
            props.navigation.navigate("Home",user.id);
        }else{
            props.navigation.navigate("Home_user");
        }
          
        } else {
          // User was not found, display an error message
          setErrorMessage("Invalid email or password");
        }
      };
      useEffect(() => {
        // Reset the values of the mail and password states when the screen is re-mounted
        setmail("");
        setpassword("");
      }, []);
      LoginPage.navigationOptions = {
        // ...
        onWillFocus: () => {
          setmail("");
          setpassword("");
        },
      };
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign name="mail" size={25} color="#4CAF50" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Mail"
                    onChangeText={text => setmail(text)}
                    value={mail}
                />
            </View>
            <View style={styles.inputContainer}>
                <AntDesign name="lock" size={25} color="#4CAF50" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={text => setpassword(text)}
                    secureTextEntry={true}
                    value={password}
                />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={handleLogin}
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <Text onPress={() => props.navigation.navigate(("Register"))} >you don't have an account ?</Text>
        </View>

    )
}
export default LoginPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F1F7"
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

    btn: {
        backgroundColor: "#4CAF50",
        width: "80%",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 10
    },

    text: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 16,
        color: "#FFF"
    },

    registerText: {
        fontSize: 14,
        color: "#333",
        margin: 10
    },

    inputContainer: {
        width: "80%",
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    inputIcon: {
        width: 25,
        height: 25,
        tintColor: "#4CAF50"
    },

    errorMessage: {
        color: "#B53A3A",
        fontSize: 12,
        margin: 10
    }
})