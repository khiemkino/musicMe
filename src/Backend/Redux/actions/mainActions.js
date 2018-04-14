import key from '../lib/constants'

export function setInternet (internet) {
  return {
    type: key.SET_INTERNET,
    payload: internet
  }
}
