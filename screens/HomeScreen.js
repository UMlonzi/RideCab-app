import { StyleSheet, SafeAreaView, Image, View, } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavOptions from '../components/NavOptions';
import logo from '../assets/logoApp.png';
import { GOOGLE_MAPS_APIKEY } from '@env';
import {useDispatch} from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
 const dispatch = useDispatch();


  return (
    <SafeAreaView style={{height:400, }}>
      <View style={{padding:5,}}>
 
        <Image source={logo} style={{ width:100, height:100,  resizeMode: "contain", margin:3, }} />
        
        <GooglePlacesAutocomplete 
        placeholder="Where from?"
        styles={{
          container: {
            flex:1,
            top:20
          },
          textInput: {
            fontSize: 18,
          },
       
        }}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
          );

          dispatch(setDestination(null))

        }}
        fetchDetails={true}
        returnKeyType={'search'}
        enablePoweredByContainer={false}
         minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        // requestUrl={{
        //   useOnPlatform: 'web', // or "all"
        //   url:
        //     'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
        // }}  
        nearbyPlacesAPI='GooglePlacesSearch'
         debounce={400}/>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
