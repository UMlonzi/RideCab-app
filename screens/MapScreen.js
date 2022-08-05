import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
  const Stack = createStackNavigator

  return (
   <View>
    <View style={{height:400}}>
      <Map />
    </View>

    <View style={{height:400}}></View>
    <Stack.Navigator>
      <Stack.Screen 
      name='NavigateCard'
      component={NavigateCard}
      options={{
        headerShown: false,
      }}
      />
     
      <Stack.Screen 
      name='RideOptionsCard'
      component={RideOptionsCard}
      options={{
        headerShown: false,
      }}
      />
  </Stack.Navigator>
   </View>
  )
}

export default MapScreen
