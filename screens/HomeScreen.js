import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/navOptions';


const HomeScreen = () => {
  return (
    <SafeAreaView >
      <View>
        <Image 
        style= {{
          width:100,
           height:100, 
           resizeMode: "contain",
        }}
        source={{
          url: "https://links.papareact.com/gzs",
        }}
        />

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
