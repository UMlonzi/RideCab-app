import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, TouchableOpacity, View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { selectOrigin } from '../slices/navSlice';

const data = [
{
    id: '123',
    title: 'Get a ride',
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_896,h_504/f_auto,q_auto/products/carousel/UberX.png',
    screen: 'MapScreen',
},
];

const NavOptions = () => {

  const navigation = useNavigation();
  

  return (
    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item) => item.id }
    renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style={{padding:2, paddingLeft:6, paddingBottom:8, paddingTop:4, backgroundColor:`#ffa500`, margin:2, flex:1, top:70, height:260, width:160, }}>
          {/* disable={!origin}  */}
            <View >
              <Image 
              
              style={{ width: 120, height: 120, resizeMode: 'contain' }} 
             source={{ uri: item.image }} />

              <Text style={{marginTop:2, fontSize:20, fontWeight:'bold'}}>{(item.title)}</Text>
              <Icon style={{padding:6, backgroundColor:'black', borderRadius:90, width:60, marginTop:9, }} 
              name='arrowright' color='white' type='antdesign' />
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavOptions

