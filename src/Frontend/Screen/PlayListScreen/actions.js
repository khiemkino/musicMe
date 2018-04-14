import MusicService from '#/Api/MusicService'
import { Actions } from 'react-native-router-flux'
var THIS
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const loadingSong = () => {
  return async (dispatch, getState) => {
    let songServer = await MusicService.getSong()
    console.log(songServer)
    THIS.setState({ arrSong: songServer, isLoading: false })
  }
}

export const handleToSong = (songItem) => {
  return (dispatch, getState) => {
    Actions.playScreen({ songItem })
  }
}

export const routeMySong = () => {
  return (dispatch, getState) => {
    Actions.mySongScreen()
  }
}

export const handleOpenMenu = () => {
  return (dispatch, getState) => {
    THIS.refs.drawer.open()
  }
}
