import MusicService from '#/Api/MusicService'
import Sound from 'react-native-sound'

var musicInterval
var THIS
let track
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const loadingSong = () => {
  return async (dispatch, getState) => {
    let songServer = await MusicService.getSong()
    let albumServer = await MusicService.getAlbum()
    console.log(songServer)
    console.log(albumServer)
    let arrAlbum = []

    albumServer.map(item => {
      let newAlbum = {album: item, songList: []}
      songServer.map(data => {
        if (data.album === item.name) {
          newAlbum.songList.push(data)
        }
      })
      arrAlbum.push(newAlbum)
    })
    console.log(arrAlbum)
    THIS.setState({ arrAlbum, albumName: arrAlbum[0].album.name, isLoading: false, arrSongAlbum: arrAlbum[0].songList })
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
    const { arrSongAlbum, songSelectIndex } = THIS.state

    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(arrSongAlbum[songSelectIndex - 1].mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({
        trackDuration,
        isLoadingSong: false,
        currentTime: null,
        songSelectId: arrSongAlbum[songSelectIndex - 1].id,
        songSelectIndex: songSelectIndex - 1
      })
    })
  }
}

export const handleSelectNextSong = () => {
  return (dispatch, getState) => {
    const { arrSongAlbum, songSelectIndex } = THIS.state

    track && track.stop()
    THIS.setState({ isLoadingSong: true })
    track = new Sound(arrSongAlbum[songSelectIndex + 1].mp3Url, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
      let trackDuration = track.getDuration()

      THIS.setState({ trackDuration,
        isLoadingSong: false,
        currentTime: null,
        songSelectId: arrSongAlbum[songSelectIndex + 1].id,
        songSelectIndex: songSelectIndex + 1 })
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

export const stopPlaying = () => {
  return (dispatch, getState) => {
    clearInterval(musicInterval)
    track && track.stop()
  }
}

export const handleSnapToItem = (index) => {
  return (dispatch, getState) => {
    const { arrAlbum } = THIS.state
    THIS.titleName.fadeIn()
    THIS.setState({ albumName: arrAlbum[index].album.name, arrSongAlbum: arrAlbum[index].songList })
  }
}
