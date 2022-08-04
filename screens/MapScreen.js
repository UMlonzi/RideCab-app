import React from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
const MapScreen = () => {
  return (
   <View>
    <View style={{height:400}}>
      <Map />
    </View>

    <View style={{height:400}}></View>
   </View>
  )
}

export default MapScreen
