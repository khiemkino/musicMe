import { Actions, ActionConst } from 'react-native-router-flux'
import { Vibration } from 'react-native'
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

export const onBarCodeRead = (objResult) => {
  return async (dispatch, getState) => {
    const { resultsData } = THIS.state
    if (resultsData !== objResult.data) {
      Vibration.vibrate()
      console.log(objResult.data)
      THIS.setState({ resultsData: objResult.data })
      let store = await MusicService.getStorePlaylist(objResult.data)
      console.log(store[0].song)
      Actions.playListDetailScreen({ type: ActionConst.REPLACE, arrSong: store[0].song, titleName: store[0].name })
    }
  }
}
