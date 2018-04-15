import { KEYSTORE } from '@/globalConstants'
import { Actions, ActionConst } from 'react-native-router-flux'
import { EventRegister } from 'react-native-event-listeners'
import store from 'react-native-simple-store'

export const handleConnectionChange = (isConnected) => {
  return async (dispatch, getState) => {
    !isConnected && EventRegister.emit('internetChange')
  }
}

export const handleChangeRoute = () => {
  return async (dispatch, getState) => {
    let userData = await store.get(KEYSTORE.SET_USER)
    let isGuideline = await store.get('Guide')

    setTimeout(() => {
      userData
        ? Actions.tabbar({ type: ActionConst.RESET })
        : isGuideline
          ? Actions.loginScreen({ type: ActionConst.RESET })
          : Actions.guidelineScreen({ type: ActionConst.RESET })
    }, 1500)
  }
}
