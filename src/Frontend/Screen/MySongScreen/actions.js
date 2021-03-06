import { Actions } from 'react-native-router-flux'
import MusicService from '#/Api/MusicService'
import { setLoginUser } from '#/Redux/actions/globalActions'
import Sound from 'react-native-sound'

var musicInterval
var THIS
let track
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const handleBackRoute = () => {
  return (dispatch, getState) => {
    track && track.stop()
    Actions.pop()
    clearInterval(musicInterval)
  }
}

export const handleActiveSearch = () => {
  return (dispatch, getState) => {
    THIS.setState({ isActiveSearch: !THIS.state.isActiveSearch, resultData: null, isNoData: false })
  }
}

export const handleClearInput = () => {
  return (dispatch, getState) => {
    THIS.setState({ txtSearch: '' })
  }
}

export const handleResults = (resultData) => {
  return (dispatch, getState) => {
    const isNoData = resultData.length === 0
    THIS.setState({ resultData, isNoData })
  }
}

export const handleInputSearch = (txtSearch) => {
  return (dispatch, getState) => {
    THIS.setState({ txtSearch })
  }
}

export const loadingSong = () => {
  return async (dispatch, getState) => {
    const { songAdded } = THIS.state
    updateSongAdded()
    THIS.setState({ songAdded })
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

export const handleSelectSong = (song, songSelectIndex) => {
  return (dispatch, getState) => {
    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(song.mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({ trackDuration, isLoadingSong: false, currentTime: null, songSelectId: song.id, songSelectIndex })
    })
  }
}

export const handleSelectPreviousSong = () => {
  return (dispatch, getState) => {
    const { arrSong, songSelectIndex } = THIS.state

    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(arrSong[songSelectIndex - 1].mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({
        trackDuration,
        isLoadingSong: false,
        currentTime: null,
        songSelectId: arrSong[songSelectIndex - 1].id,
        songSelectIndex: songSelectIndex - 1
      })
    })
  }
}

export const handleSelectNextSong = () => {
  return (dispatch, getState) => {
    const { arrSong, songSelectIndex } = THIS.state

    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(arrSong[songSelectIndex + 1].mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({
        trackDuration,
        isLoadingSong: false,
        currentTime: null,
        songSelectId: arrSong[songSelectIndex + 1].id,
        songSelectIndex: songSelectIndex + 1
      })
    })
  }
}

export const handleActivePlay = () => {
  return (dispatch, getState) => {
    THIS.setState({ isPlay: !THIS.state.isPlay })
    THIS.state.isPlay ? track.pause() : track.play()

    musicInterval = setInterval(() => {
      track.getCurrentTime((currentTime) => {
        if (currentTime === 0) {
          clearInterval(musicInterval)
          THIS.setState({ isPlay: false })
        } else {
          THIS.setState({ currentTime })
        }
      })
    }, 100)
  }
}
