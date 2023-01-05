import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TextInput, Text, View, Pressable, ScrollView, SafeAreaView } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const ADD_Pitch = ({ navigation, route }) => {
    const [location, setLocation] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const userid = route.params
    console.log("userid :", userid)
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const [Name, setName] = useState('');
    const [Adresse, setadresse] = useState('');
    const [Format, setformat] = useState('');
    const [Price, setprice] = useState('');
    const [City, setcity] = useState('');
    const form = ["4x4", "5x5", "6x6", "7x7", "8x8", "9x9", "10x10", "11x11"];
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
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        console.log(location)
    }, []);
    const gtpitchmappos = (cord) => {
        setSelectedPosition(cord)
        console.log(selectedPosition)
        return cord;
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>

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

                    buttonStyle={styles.dropdown}
                    data={form}
                    defaultButtonText="Select the Format of your pitch"
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
                <TouchableOpacity style={styles.btn} onPress={pickImage}>
                    <Text style={{ textAlign: 'center', padding: 10 }}>
                        Click here to pick an image from camera roll
                    </Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <View>
                    {location ? (
                        <View style={styles.mapContainer}>
                            <Text>pick your pitch position on the map</Text>
                            <MapView
                                style={styles.map}
                                provider={MapView.PROVIDER_OPENSTREETMAP}
                                initialRegion={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                    latitudeDelta: LATITUDE_DELTA,
                                    longitudeDelta: LONGITUDE_DELTA,
                                }}
                                onPress={e => gtpitchmappos(e.nativeEvent.coordinate)}

                            >
                                {selectedPosition && (
                                    <Marker coordinate={selectedPosition} />
                                )}
                            </MapView>
                        </View>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log("add")}
                >
                    <Text style={styles.text}>ADD</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.NavContainer}>
                <View style={styles.NavBar}>
                    <Pressable onPress={() => navigation.navigate(("Home"), userid)}
                        style={styles.IconBeahve}
                        android_ripple={{ borderless: true, radius: 50 }}>
                        <AntDesign name="bars" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(("ADD_Pitch"))}
                        style={styles.IconBeahve}
                        android_ripple={{ borderless: true, radius: 50 }}>
                        <AntDesign name="plus" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate(("Login"))}
                        style={styles.IconBeahve}
                        android_ripple={{ borderless: true, radius: 50 }}>
                        <AntDesign name="logout" size={24} color="black" />
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default ADD_Pitch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F5F1F7",
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center', // This is the fix for the error
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
    NavContainer: {
        position: 'relative',
        bottom: -2,
        alignItems: 'center',
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
    map: {
        flex: 1,
    },
    mapContainer: {
        width: '90%',
        height: 200,
    },
});
