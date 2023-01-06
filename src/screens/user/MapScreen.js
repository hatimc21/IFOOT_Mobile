import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get("screen");
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);


const MapScreen = ({ navigation, route }) => {
    const [pitches, setPiches] = useState(null)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
         // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('http://192.168.137.1:8080/pitches');
        //         setPiches(response.data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        // fetchData();
        setPiches([
            {
                "id": 1,
                "name": "pitch1",
                "address": "Sidi Abbad",
                "format": "5*5",
                "price": 200.0,
                "city": "Marrakesh",
                "heure_open": "8:00",
                "heure_close": "22:00",
                "picture": {
                    "id": 1,
                    "name": "pitch1.jpg"
                },
                "user": {
                    "id": 1,
                    "name": "hatim",
                    "email": "hatim@gmail.com",
                    "password": "hatim",
                    "phone": "198448",
                    "date_of_birth": "2001-01-01T00:00:00.000+00:00",
                    "city": "marrakech",
                    "country": "morocco",
                    "social_media_provider": null,
                    "social_media_userid": null,
                    "role": 1,
                    "created_at": "2023-01-03T22:56:12.000+00:00"
                },
                "location": {
                    "id": 1,
                    "longitude": -8.01254,
                    "latitude": 31.6539
                }
            },
            {
                "id": 2,
                "name": "pitch2",
                "address": "Rue du jbel Sahro",
                "format": "4*4",
                "price": 180.0,
                "city": "Marrakesh",
                "heure_open": "9:00",
                "heure_close": "23:00",
                "picture": {
                    "id": 2,
                    "name": "pitch2.jpg"
                },
                "user": {
                    "id": 1,
                    "name": "hatim",
                    "email": "hatim@gmail.com",
                    "password": "hatim",
                    "phone": "198448",
                    "date_of_birth": "2001-01-01T00:00:00.000+00:00",
                    "city": "marrakech",
                    "country": "morocco",
                    "social_media_provider": null,
                    "social_media_userid": null,
                    "role": 1,
                    "created_at": "2023-01-03T22:56:12.000+00:00"
                },
                "location": {
                    "id": 2,
                    "longitude": -8.02348,
                    "latitude": 31.6396
                }
            },
            {
                "id": 3,
                "name": "pitch3",
                "address": "daoudiate",
                "format": "6*6",
                "price": 250.0,
                "city": "Marrakesh",
                "heure_open": "10:00",
                "heure_close": "22:00",
                "picture": {
                    "id": 3,
                    "name": "pitch3.jpg"
                },
                "user": {
                    "id": 1,
                    "name": "hatim",
                    "email": "hatim@gmail.com",
                    "password": "hatim",
                    "phone": "198448",
                    "date_of_birth": "2001-01-01T00:00:00.000+00:00",
                    "city": "marrakech",
                    "country": "morocco",
                    "social_media_provider": null,
                    "social_media_userid": null,
                    "role": 1,
                    "created_at": "2023-01-03T22:56:12.000+00:00"
                },
                "location": {
                    "id": 3,
                    "longitude": -7.99977,
                    "latitude": 31.6477
                }
            }
        ]
        )
    }, []);

    return (
        <View style={styles.container}>
            {location ? (
                <MapView
                    style={styles.map}
                    provider={MapView.PROVIDER_OPENSTREETMAP}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        pinColor="blue"
                        style={{ height: 5, width: 5 }}
                    />
                    {pitches.map(pitch => (
                        <Marker
                            key={pitch.id}
                            coordinate={{
                                latitude: pitch.location.latitude,
                                longitude: pitch.location.longitude,
                            }}
                            onPress={() => navigation.navigate("Detail_user",pitch)}
                        />
                    ))}
                </MapView>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});


export default MapScreen;
