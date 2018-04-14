import createReducer from '../lib/reducerConfig'
import init from '../lib/initState'
import I18n from 'react-native-i18n'
import { KEYSTORE } from '@/globalConstants'

export const userData = createReducer(init.userInit, {
  [KEYSTORE.SET_USER] (state, action) {
    return action.payload
  }
})

export const localeData = createReducer(init.localeInit, {
  [KEYSTORE.SET_LOCALE] (state, action) {
    I18n.locale = action.payload
    return action.payload
  }
})
