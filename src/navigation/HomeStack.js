import React from 'react'
import MainStack from './MainStack'

import navigationString from './navigationString'
import { TabRoutes } from './TabRoutes'


export default function HomeStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.TABROUTES} component={TabRoutes} />
    </>
  )
}
