import React from 'react'
import MainStack from './MainStack'

import navigationString from './navigationString'


export default function HomeStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.MAIN} component={MainStack} />
      

    </>
  )
}
