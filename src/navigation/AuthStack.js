import React from 'react'
import navigationString from './navigationString'
import Signup from '../Screen/Signup/Signup'
import { Login } from '../Screen/Login/Login'

export default function AuthStack(Stack) {
  return (
   <>
   <Stack.Screen name={navigationString.SIGNUP} component={Signup} />
<Stack.Screen name={navigationString.LOGIN} component={Login} />
   </>
  )
}
