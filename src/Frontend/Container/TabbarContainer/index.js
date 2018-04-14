import React from 'react'
import { Image } from 'react-native'
import Scrollable from 'react-native-scrollable-tab-view'

import HomeScreen from '~/Screen/HomeScreen'
import CoreLayoutContainer from '~/Container/CoreLayoutContainer'

import images from '*/Image'
import Tabbar from './tabbar'
import styles from './styles'

// custom modal
import { AppAlert } from '~/Components/AppAlert'

class TabbarTopScreen extends React.Component {
  showAlert (mesage, isError) {
    this.refs.appAlert.alertWithType(mesage, isError)
  }

  render () {
    const { iInitialPage = 0 } = this.props
    return (
      <CoreLayoutContainer ref={'scrTabWalletTop'} headerStyle={{ position: 'absolute', backgroundColor: 'transparent' }}>
        <Scrollable
          initialPage={iInitialPage}
          tabBarPosition="bottom"
          locked={true}
          scrollWithoutAnimation={true}
          renderTabBar={() => { return <Tabbar /> }}>
          <HomeScreen tabLabel={'home'} />
          <HomeScreen tabLabel={'album'} />
          <HomeScreen tabLabel={'playlist'} />
          <HomeScreen tabLabel={'setting'} />

        </Scrollable>
        <Image source={images.backgroundInside} style={styles.backgroundStyle} />
        <AppAlert ref={'appAlert'} />
      </CoreLayoutContainer>

    )
  }
}

export default TabbarTopScreen
