import { KEYSTORE } from '@/globalConstants'
import { Actions, ActionConst } from 'react-native-router-flux'
import { EventRegister } from 'react-native-event-listeners'
import store from 'react-native-simple-store'
import { updateExchangeRate } from '@/globalFunction'

export const handleConnectionChange = (isConnected) => {
  return async (dispatch, getState) => {
    !isConnected && EventRegister.emit('internetChange')
    updateExchangeRate(dispatch)
  }
}

export const handleChangeRoute = () => {
  return async (dispatch, getState) => {
    let userData = await store.get(KEYSTORE.SET_USER)
    setTimeout(() => {
      userData
        ? Actions.homeScreen({ type: ActionConst.RESET })
        : Actions.loginScreen({ type: ActionConst.RESET })
    }, 500)
  }
}
