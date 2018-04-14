import { Actions } from 'react-native-router-flux'
import Sound from 'react-native-sound'

var musicInterval
var THIS
let track
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    const { songItem } = _this.props
    THIS = _this
    track = new Sound(songItem.mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      _this.setState({ trackDuration, isLoading: false })
    })
  }
}

export const handleActiveLike = () => {
  return (dispatch, getState) => {
    THIS.setState({isLove: !THIS.state.isLove})
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

export const handleBackRoute = () => {
  return (dispatch, getState) => {
    Actions.pop()
    track.stop()
  }
}
