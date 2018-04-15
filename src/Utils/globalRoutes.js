import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

import SplashScreen from '~/Screen/SplashScreen'
import LoginScreen from '~/Screen/LoginScreen'
import PlayScreen from '~/Screen/PlayScreen'
import MySongScreen from '~/Screen/MySongScreen'
import ProfileScreen from '~/Screen/ProfileScreen'
import QrCodeScreen from '~/Screen/QrCodeScreen'
import GuidelineScreen from '~/Screen/GuidelineScreen'
import PlayListDetailScreen from '~/Screen/PlayListDetailScreen'
import TabbarContainer from '~/Container/TabbarContainer'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    {/* Main Page */}
    <Scene key="splashScreen" component={SplashScreen} initial={true} panHandlers={null}/>
    <Scene key="loginScreen" component={LoginScreen} panHandlers={null}/>

    <Scene key="tabbar" component={TabbarContainer} panHandlers={null}/>

    <Scene key="playScreen" component={PlayScreen} panHandlers={null}/>
    <Scene key="profileScreen" component={ProfileScreen} panHandlers={null}/>
    <Scene key="playListDetailScreen" component={PlayListDetailScreen} panHandlers={null} />
    <Scene key="mySongScreen" component={MySongScreen} panHandlers={null}/>
    <Scene key="qrCodeScreen" component={QrCodeScreen} panHandlers={null}/>
    <Scene key="guidelineScreen" component={GuidelineScreen} panHandlers={null}/>

  </Scene>
)

export default scenes
