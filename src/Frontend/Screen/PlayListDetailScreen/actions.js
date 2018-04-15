import { Actions } from 'react-native-router-flux'
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
    clearInterval(musicInterval)
    Actions.pop()
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

export const handlePlaySong = (songSelect, songSelectIndex) => {
  return (dispatch, getState) => {
    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(songSelect.mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({ songSelect, trackDuration, isLoadingSong: false, currentTime: null, songSelectId: songSelect.id, songSelectIndex }, () => {
        THIS.refs.mdPlaySong.open()
      })
    })
  }
}

export const handleSelectPreviousSong = () => {
  return (dispatch, getState) => {
    const { songSelectIndex } = THIS.state
    const { arrSong } = THIS.props

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
    const { songSelectIndex } = THIS.state
    const { arrSong } = THIS.props

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

export const handleFavorite = () => {
  return (dispatch, getState) => {
    THIS.setState({ isFavorite: !THIS.state.isFavorite })
  }
}
