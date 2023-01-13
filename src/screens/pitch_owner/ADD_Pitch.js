import React, { useState, useEffect, Linking } from "react";
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
import * as FileSystem from 'expo-file-system';
import axios from "axios";

const ADD_Pitch = ({ navigation, route }) => {
    const [location, setLocation] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const userid = route.params
    console.log("userid :", userid)
    const [pitches, setPiches] = useState([]);
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    })
    const [Name, setName] = useState('');
    const [Adresse, setadresse] = useState('');
    const [Format, setformat] = useState('');
    const [Price, setprice] = useState(0);
    const [City, setcity] = useState('');
    const form = ["4*4", "5*5", "6*6", "7*7", "8*8", "9*9", "10*10", "11*11"];
    const [image, setImage] = useState(null);
    const [imageu, setImageu] = useState(null);
    const [imagename, setImagename] = useState('');
    const [Heureopen, setHeureopen] = useState('');
    const [Heureclose, setHeureclose] = useState('');
    const [Address, setAddress] = useState('');
    function handleUpload() {
        const counter = pitches.length + 1
        setImagename('pitch' + counter + '.jpg');
        let prix = parseFloat(Price)
        console.log(typeof(prix))
        try {
            axios.post('http://192.168.137.1:8080/pitches/addpitch?latitude='+selectedPosition.latitude+'&longitude='+selectedPosition.longitude+'&image='+imagename+'&iduser='+userid+'&name='+Name+'&address='+Address+'&city='+City+'&format='+Format+'&price='+prix+'&heureopen='+Heureopen+'&heureclose='+Heureclose)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });

        } catch (error) {
            console.error(error);
        }
        console.log("test");
        // data.append('imageFile', setFile(image));
        // console.log('hadi data',data)
    }
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
            setImage(result);
            setImageu(result.assets[0].uri)
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
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.137.1:8080/pitches');
                setPiches(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        console.log('hadi lenght ' + pitches.length)
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
                    onChangeSearchInputText={text => setformat(text)}
                    value={Format}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder="Price *"
                    onChangeText={text => setprice(text)}
                    value={Price}
                />
                <TextInput
                    style={styles.input}
                    placeholder="City *"
                    onChangeText={text => setcity(text)}
                    value={City}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Address *"
                    onChangeText={text => setAddress(text)}
                    value={Address}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Heureopen *"
                    onChangeText={text => setHeureopen(text)}
                    value={Heureopen}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Heureclose *"
                    onChangeText={text => setHeureclose(text)}
                    value={Heureclose}
                />
                <TouchableOpacity style={styles.btn} onPress={pickImage}>
                    <Text style={{ textAlign: 'center', padding: 10 }}>
                        Click here to pick an image from camera roll
                    </Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: imageu }} style={{ width: 200, height: 200 }} />}
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
                    onPress={handleUpload}
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
        width: '100%',
        height: 200,
    },
});
