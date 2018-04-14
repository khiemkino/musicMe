import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from '~/Screen/SplashScreen'
import LoginScreen from '~/Screen/LoginScreen'
import PlayScreen from '~/Screen/PlayScreen'
import TabbarContainer from '~/Container/TabbarContainer'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    {/* Main Page */}
    <Scene key="splashScreen" component={SplashScreen} initial={true} panHandlers={null}/>
    <Scene key="loginScreen" component={LoginScreen} />

    <Scene key="tabbar" component={TabbarContainer} />

    <Scene key="playScreen" component={PlayScreen} />
  </Scene>
)

export default scenes
