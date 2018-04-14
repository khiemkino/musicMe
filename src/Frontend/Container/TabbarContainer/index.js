import React from 'react'
import Scrollable from 'react-native-scrollable-tab-view'

import HomeScreen from '~/Screen/HomeScreen'
import CoreLayoutContainer from '~/Container/CoreLayoutContainer'

// custom tabbar
import Tabbar from './tabbar'

// custom modal
import { AppAlert } from '~/Components/AppAlert'

class TabbarTopScreen extends React.Component {
  showAlert (mesage, isError) {
    this.refs.appAlert.alertWithType(mesage, isError)
  }

  render () {
    const { iInitialPage = 0 } = this.props
    return (
      <CoreLayoutContainer ref={'scrTabWalletTop'} headerStyle={{ position: 'absolute' }}>
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
        <AppAlert ref={'appAlert'} />
      </CoreLayoutContainer>

    )
  }
}

export default TabbarTopScreen
