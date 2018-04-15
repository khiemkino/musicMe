import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from '~/Screen/SplashScreen'
import LoginScreen from '~/Screen/LoginScreen'
import PlayScreen from '~/Screen/PlayScreen'
import MySongScreen from '~/Screen/MySongScreen'
import ProfileScreen from '~/Screen/ProfileScreen'
import QrCodeScreen from '~/Screen/QrCodeScreen'
import PlayListDetailScreen from '~/Screen/PlayListDetailScreen'
import TabbarContainer from '~/Container/TabbarContainer'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    {/* Main Page */}
    <Scene key="splashScreen" component={SplashScreen} initial={true} panHandlers={null}/>
    <Scene key="loginScreen" component={LoginScreen} />

    <Scene key="tabbar" component={TabbarContainer} />

    <Scene key="playScreen" component={PlayScreen} />
    <Scene key="profileScreen" component={ProfileScreen} />
    <Scene key="playListDetailScreen" component={PlayListDetailScreen} />
    <Scene key="mySongScreen" component={MySongScreen} />
    <Scene key="qrCodeScreen" component={QrCodeScreen} />

  </Scene>
)

export default scenes
