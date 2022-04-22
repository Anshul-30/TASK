import React from 'react'
import Login from '../Screen/Login/Login'
import navigationString from './navigationString'


export default function AuthStack(Stack) {
  return (
   <>
<Stack.Screen name={navigationString.LOGIN} component={Login} />
   </>
  )
}
