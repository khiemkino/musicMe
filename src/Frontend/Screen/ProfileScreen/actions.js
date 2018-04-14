import { Actions } from 'react-native-router-flux'
import MusicService from '#/Api/MusicService'

var THIS
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const handleBackRoute = () => {
  return (dispatch, getState) => {
    Actions.pop()
  }
}
