import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-web';

const data = {
    id: '123',
    title: 'Get a ride',
    images: '',
    screen: 'MapScreen'
};


const navOptions = () => {
  return (
    <FlatList 
    data=   {data}
    horizontal
    renderItem={({ item }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    )}
    />
  );
};

export default navOptions

const styles = StyleSheet.create({})