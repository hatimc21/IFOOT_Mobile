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
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";

const width = Dimensions.get("screen").width / 2 - 30;


const Myevents = ({ navigation, route }) => {
    const userid = route.params;
    const [events, setEvenets] = useState(null)

    useEffect(() => {
        console.log(userid)
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.137.1:8081/events/myevents/?id='+userid);
                setEvenets(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        // setEvenets([
        //     {
        //         "id": 1,
        //         "date": "2023-01-07",
        //         "heure_debut": "10:00",
        //         "heure_fin": "12:00",
        //         "id_pitch": 1,
        //         "id_user": 2,
        //         "number_players": 10,
        //         "id_players": [
        //             11,
        //             2,
        //             3,
        //             4,
        //             5,
        //             6,
        //             7,
        //             8,
        //             9,
        //             10
        //         ],
        //         "cost": 200.0,
        //         "ispaid": false
        //     },
        //     {
        //         "id": 2,
        //         "date": "2023-01-08",
        //         "heure_debut": "09:00",
        //         "heure_fin": "10:00",
        //         "id_pitch": 2,
        //         "id_user": 2,
        //         "number_players": 8,
        //         "id_players": [
        //             2,
        //             3,
        //             4,
        //             5,
        //             6,
        //             7,
        //             8,
        //             9
        //         ],
        //         "cost": 180.0,
        //         "ispaid": false
        //     }
        // ])
    }, []);
    const Card = ({ event }) => {
        return (
            <TouchableOpacity >
                <View style={styles.card}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
                        {event.date}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
                            {event.heure_debut} - {event.heure_fin}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                    }}>
                        <Text
                            style={{ fontSize: 16, color: COLORS.dark, fontWeight: 'bold' }}>
                            {event.id_players.length} players in this event</Text>
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
                    numColumns={2} data={events}
                    renderItem={({ item }) => {
                        return <Card event={item} />;
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
export default Myevents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    botonat:{
        flex: 1,
        alignItems: "center",
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