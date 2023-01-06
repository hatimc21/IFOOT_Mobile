import React, { useState, useEffect } from "react";
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
import axios from "axios";
import pictures from "../../const/pictures";

const width = Dimensions.get("screen").width / 2 - 30;

const Home_user = ({navigation,route}) => {
    const userid = route.params;
    const [pitches, setPiches] = useState(null)
    const setpath = async (pitch) => {
        
        const source = `../../img/${pitch.picture.name}`
        console.log(typeof(source))
        return source
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.137.1:8080/pitches');
                setPiches(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        // setPiches([
        //     {
        //         "id": 1,
        //         "name": "pitch1",
        //         "address": "Sidi Abbad",
        //         "format": "5*5",
        //         "price": 200.0,
        //         "city": "Marrakesh",
        //         "heure_open": "8:00",
        //         "heure_close": "22:00",
        //         "picture": {
        //             "id": 1,
        //             "name": "pitch1.jpg"
        //         },
        //         "user": {
        //             "id": 1,
        //             "name": "hatim",
        //             "email": "hatim@gmail.com",
        //             "password": "hatim",
        //             "phone": "198448",
        //             "date_of_birth": "2001-01-01T00:00:00.000+00:00",
        //             "city": "marrakech",
        //             "country": "morocco",
        //             "social_media_provider": null,
        //             "social_media_userid": null,
        //             "role": 1,
        //             "created_at": "2023-01-03T22:56:12.000+00:00"
        //         },
        //         "location": {
        //             "id": 1,
        //             "longitude": -8.01254,
        //             "latitude": 31.6539
        //         }
        //     },
        //     {
        //         "id": 2,
        //         "name": "pitch2",
        //         "address": "Rue du jbel Sahro",
        //         "format": "4*4",
        //         "price": 180.0,
        //         "city": "Marrakesh",
        //         "heure_open": "9:00",
        //         "heure_close": "23:00",
        //         "picture": {
        //             "id": 2,
        //             "name": "pitch2.jpg"
        //         },
        //         "user": {
        //             "id": 1,
        //             "name": "hatim",
        //             "email": "hatim@gmail.com",
        //             "password": "hatim",
        //             "phone": "198448",
        //             "date_of_birth": "2001-01-01T00:00:00.000+00:00",
        //             "city": "marrakech",
        //             "country": "morocco",
        //             "social_media_provider": null,
        //             "social_media_userid": null,
        //             "role": 1,
        //             "created_at": "2023-01-03T22:56:12.000+00:00"
        //         },
        //         "location": {
        //             "id": 2,
        //             "longitude": -8.02348,
        //             "latitude": 31.6396
        //         }
        //     },
        //     {
        //         "id": 3,
        //         "name": "pitch3",
        //         "address": "daoudiate",
        //         "format": "6*6",
        //         "price": 250.0,
        //         "city": "Marrakesh",
        //         "heure_open": "10:00",
        //         "heure_close": "22:00",
        //         "picture": {
        //             "id": 3,
        //             "name": "pitch3.jpg"
        //         },
        //         "user": {
        //             "id": 1,
        //             "name": "hatim",
        //             "email": "hatim@gmail.com",
        //             "password": "hatim",
        //             "phone": "198448",
        //             "date_of_birth": "2001-01-01T00:00:00.000+00:00",
        //             "city": "marrakech",
        //             "country": "morocco",
        //             "social_media_provider": null,
        //             "social_media_userid": null,
        //             "role": 1,
        //             "created_at": "2023-01-03T22:56:12.000+00:00"
        //         },
        //         "location": {
        //             "id": 3,
        //             "longitude": -7.99977,
        //             "latitude": 31.6477
        //         }
        //     }
        // ]
        // )
    }, []);
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    useEffect(() => {
    }, []);
    const Card = ({ pitch }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Detail_user", pitch)}>
                <View style={styles.card}>
                    <View style={{ height: 90, alignItems: 'center' }}>
                        { pitch.picture.name ?(
                        <Image style={{ flex: 1, resizeMode: 'contain' }} source={pictures[pitch.id-1].img}/>
                        ):(<Text>Loading...</Text>)}
                    </View>
                    <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
                        {pitch.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5,
                        }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
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
                                style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>
                                <Ionicons name="md-calendar-outline" size={20} color="black" />
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {pitches ? (
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                        <Text style={{ fontSize: 38, color: '#00B761', fontWeight: 'bold' }}>
                            IFOOT
                        </Text>
                    </View>
                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        contentContainerStyle={{
                            marginTop: 10,
                            paddingBottom: 50,
                        }}
                        numColumns={2} data={pitches}
                        renderItem={({ item }) => {
                            return <Card pitch={item} />;
                        }}
                    />
                    <View style={styles.NavContainer}>
                        <View style={styles.NavBar}>
                            <Pressable onPress={() => navigation.navigate(("Home"))}
                                style={styles.IconBeahve}
                                android_ripple={{ borderless: true, radius: 50 }}>
                                <AntDesign name="bars" size={24} color="black" />
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate(("Nearby"))}
                                style={styles.IconBeahve}
                                android_ripple={{ borderless: true, radius: 50 }}>
                                <Feather name="map-pin" size={24} color="black" />
                            </Pressable>
                            <Pressable
                                onPress={() => navigation.navigate(("Event_user"))}
                                style={styles.IconBeahve}
                                android_ripple={{ borderless: true, radius: 50 }}>
                                <MaterialIcons name="event-available" size={24} color="black" />
                            </Pressable>
                            <Pressable onPress={() =>   navigation.navigate(("Reservation_user"),user)}
                                style={styles.IconBeahve}
                                android_ripple={{ borderless: true, radius: 50 }}>
                                <AntDesign name="book" size={24} color="black" />
                            </Pressable>
                        </View>

                    </View>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </SafeAreaView>
    )
}

export default Home_user

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
    btn: {
        backgroundColor: "#E2443B",
        paddingHorizontal: 60,
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
        height: 225,
        backgroundColor: "#eee",
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    }
})