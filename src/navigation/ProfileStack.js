import React from 'react'
import navigationString from './navigationString'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screen/Profile/Profile'

const Stack = createStackNavigator()
export const ProfileStack=()=> {
  return (
    <>
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name={navigationString.PROFILE} component={Profile} />

    </Stack.Navigator>
    </>
  )
}
