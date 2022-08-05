import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet} from 'react-native'
import {useDispatch} from 'react-redux';
import { SafeAreaView } from "react-navigation";

import { setDestination } from "../slices/navSlice";

const NavigateCard = () => {
    const dispatch = useDispatch();
   const navigation = useNavigation();
    return (
       <SafeAreaView style={{backgroundColor:'red'}}>
            <Text style={{textAlign:'center', padding: 5, fontSize:20,}}>
                Hello Usi
            </Text>
            <View style={{
                border:20, borderColor: 'Yellow',
            }}>
        <GooglePlacesAutocomplete
            placeholder="Where to"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null ) => {
                dispatch(
                    setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    })
                );
                navigation.navigate('RideOptionsCard')
            }}
            enablePoweredByContainer={false}
            query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
        }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}

            />
            </View>
            </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex:0,
    },
    textInput: {
        backgroundColor: "blue",
        borderRadius: 0,
        fontSize: 20,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    },
});
