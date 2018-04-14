import { Actions } from 'react-native-router-flux'
var THIS

export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
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
  }
}

export const handleBackRoute = () => {
  return (dispatch, getState) => {
    Actions.pop()
  }
}
