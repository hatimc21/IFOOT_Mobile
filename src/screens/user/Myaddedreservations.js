import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, Pressable, FlatList, Dimensions, SafeAreaView } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import COLORS from "../../const/colors";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get("screen").width / 2 - 30;


const Myaddedreservations = ({ navigation, route }) => {
    const userid = route.params;
    const [reservations, setReservations] = useState(null)

    useEffect(() => {

        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('http://192.168.137.1:8080//reservations/myaddedreservations/?id_user='+userid);
        //         setReservations(response.data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        // fetchData();
        setReservations([
            {
                "id": 1,
                "date": "2023-03-25",
                "heure_debut": "10:00",
                "cost": 200.0,
                "ispaid": false,
                "id_pitch": 1,
                "id_user": 2,
                "id_players": [
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ]
            },
            {
                "id": 2,
                "date": "2023-04-25",
                "heure_debut": "15:00",
                "cost": 200.0,
                "ispaid": true,
                "id_pitch": 1,
                "id_user": 3,
                "id_players": [
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ]
            }
        ])
    }, []);
    const Card = ({ reservation }) => {
        return (
            <TouchableOpacity >
                <View style={styles.card}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
                        {reservation.date}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                           {reservation.heure_debut}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                    }}>
                        <Text
                            style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>
                            is paid :{reservation.ispaid ?(<Text> YES </Text>):(<Text> NO </Text>) }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 50,
                    }}
                    numColumns={2} data={reservations}
                    renderItem={({ item }) => {
                        return <Card reservation={item} />;
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
export default Myaddedreservations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
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
        fontSize: 30,
        color: '#FFF'
    },
    textb: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 15,
        color: '#FFF'
    },
    btn: {
        backgroundColor: "#E2443B",
        paddingVertical: 12,
        borderRadius: 30
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
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
    card: {
        height: 190,
        backgroundColor: "#eee",
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
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
})