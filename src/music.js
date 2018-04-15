import React, { PureComponent } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from '@/globalRoutes'
import { Provider, connect } from 'react-redux'
import storeRedux from '#/Redux/store/configureStore'
import { KEYSTORE } from '@/globalConstants'
import { checkLocalStoreToRedux } from '#/Redux/lib/reducerConfig'
import * as actions from '#/Redux/actions/globalActions'
import init from '#/Redux/lib/initState'

const RouterWithRedux = connect()(Router)

export default class MusicMe extends PureComponent {
  render () {
    checkLocalStoreToRedux(storeRedux, KEYSTORE.SET_USER, actions.setLoginUser, init.userInit)
    checkLocalStoreToRedux(storeRedux, KEYSTORE.SET_LOCALE, actions.setLanguage, init.localeInit)
    return (
      <Provider store={storeRedux}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    )
  }
}
