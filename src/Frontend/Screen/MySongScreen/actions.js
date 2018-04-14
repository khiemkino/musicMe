import { Actions } from 'react-native-router-flux'
import MusicService from '#/Api/MusicService'
import { setLoginUser } from '#/Redux/actions/globalActions'

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

export const loadingSong = () => {
  return async (dispatch, getState) => {
    const { songAdded } = THIS.state
    let songServer = await MusicService.getSong()
    updateSongAdded()
    THIS.setState({ arrSong: songServer, songAdded })
  }
}

const updateSongAdded = () => {
  const { userData } = THIS.props
  const { songAdded } = THIS.state
  if (userData.mySong.length > 0) {
    userData.mySong.map(item => {
      songAdded.push(item.id)
    })
  }
}

export const selectSong = (songSelect) => {
  return (dispatch, getState) => {
    THIS.setState({ songSelect }, () => {
      THIS.refs.mdPlaylist.open()
    })
  }
}

export const handleAddSong = () => {
  return async (dispatch, getState) => {
    const { songSelect, songAdded } = THIS.state
    const { userData } = THIS.props

    if (songAdded.includes(songSelect.id)) {
      userData.mySong.map((item, index) => {
        if (item.id === songSelect.id) {
          userData.mySong.splice(index, 1)
          songAdded.splice(songAdded.indexOf(songSelect.id), 1)
        }
      })
    } else {
      userData.mySong.push(songSelect)
    }
    updateSongAdded()

    dispatch(setLoginUser(userData))
    await MusicService.updateSong(userData.mySong, userData.id)
    THIS.setState({ songAdded: userData.mySong.length === 0 ? [] : songAdded })
    THIS.forceUpdate()
  }
}

export const handleOpenInfo = () => {
  return (dispatch, getState) => {
    THIS.refs.mdInfo.open()
  }
}

export const handleCloseInfo = () => {
  return (dispatch, getState) => {
    THIS.refs.mdInfo.close()
  }
}
