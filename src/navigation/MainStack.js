import React from 'react'
import AddTask from '../Screen/Task/AddTask'
import navigationString from './navigationString'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../Screen/Home/Home'
const Stack = createStackNavigator()
export default function MainStack() {
  return (
    <>
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name={navigationString.HOME} component={Home} />
      <Stack.Screen name={navigationString.TASK} component={AddTask} />

    </Stack.Navigator>
    </>
  )
}
