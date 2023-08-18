import React from 'react'
import Login from '../Screen/Login/Login'
import navigationString from './navigationString'
import Signup from '../Screen/Signup/Signup'


export default function AuthStack(Stack) {
  return (
   <>
   <Stack.Screen name={navigationString.SIGNUP} component={Signup} />
<Stack.Screen name={navigationString.LOGIN} component={Login} />
   </>
  )
}
