import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";


const Detail = ({ navigation, route }) => {
  
    const pitch = route.params;
    console.log(pitch)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name="shopping-cart" color="#474747" size={25} />
            </View>
            <Image source={pitch.img} style={styles.img} />
            <View style={styles.count3}>
                <Text style={styles.title}>{pitch.name}</Text>
                <Text style={styles.subtitle}>{pitch.price} dh / heur</Text>
                <View style={styles.count2}>
                </View>
                <Text style={styles.text}>
                    {pitch.about}
                </Text>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end", // change this line
        width: "100%",
        paddingHorizontal: 20,
      },
    img: {
      height: "45%",
      width: "100%",
      resizeMode: "cover",
    },
    count3: {
      flex: 1,
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 30,
      fontFamily: "Montserrat_700Bold",
      marginTop: 20,
    },
    subtitle: {
      fontSize: 20,
      color: "#474747",
      marginTop: 10,
      fontFamily: "Montserrat_400Regular",
    },
    text: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 20,
        paddingRight: 80,
        lineHeight: 25,
        color: "#474747",
      },
    btn: {
      backgroundColor: "#00B761",
      paddingHorizontal: 60,
      paddingVertical: 12,
      borderRadius: 30,
    },
    btnText: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 20,
      color: "#FFF",
    },
    cont1: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      marginTop: 40,
    },
    c3: {
      height: 20,
      width: 20,
      borderRadius: 15,
      backgroundColor: "#529CC0",
    },
    selected: {
      backgroundColor: "#00B761",
      height: 30,
      width: 30,
      borderRadius: 24,
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
    },
    count2: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      marginVertical: 25,
    },
  });
  
  