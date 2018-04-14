import { checkStore } from '../lib/reducerConfig'
import { KEYSTORE } from '@/globalConstants'

export function setLoginUser (user) {
  checkStore(user, KEYSTORE.SET_USER)
  return {
    type: KEYSTORE.SET_USER,
    payload: user
  }
}

export function setLanguage (language) {
  checkStore(language, KEYSTORE.SET_LOCALE)
  return {
    type: KEYSTORE.SET_LOCALE,
    payload: language
  }
}
