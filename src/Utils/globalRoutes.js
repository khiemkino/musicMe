import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from '~/Screen/SplashScreen'
import LoginScreen from '~/Screen/LoginScreen'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    {/* Main Page */}
    <Scene key="splashScreen" component={SplashScreen} initial={true} panHandlers={null}/>
    <Scene key="loginScreen" component={LoginScreen} />
  </Scene>
)

export default scenes
