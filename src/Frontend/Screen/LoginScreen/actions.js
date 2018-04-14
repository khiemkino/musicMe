import { Actions } from 'react-native-router-flux'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import MusicService from '#/Api/services/MusicService'
import { setLoginUser } from '#/Redux/actions/globalActions'

var THIS
export const defaultThis = (_this) => {
  return (dispatch, getState) => {
    THIS = _this
  }
}

export const handleLoginFacebook = () => {
  return (dispatch, getState) => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        THIS.setState({isLoading: true})
        AccessToken.getCurrentAccessToken().then((data) => {
          console.log(data)
          const responseInfoCallback = async (error, profile) => {
            if (error) {
              console.log(error)
              THIS.setState({ isLoading: false })
            } else {
              console.log(profile)
              let userData = await MusicService.registerUser(profile.id, profile.name, profile.email, profile.link, profile.picture.data.url)
              console.log(userData)
              console.log(profile)
              if (userData) {
                dispatch(setLoginUser(userData))
                Actions.homeScreen()
              }
            }
          }
          if (data !== null) {
            const accessToken = data.accessToken
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken,
                parameters: {
                  fields: {
                    string: 'name,email,link,picture.type(large)'
                  }
                }
              },
              responseInfoCallback
            )
            new GraphRequestManager().addRequest(infoRequest).start()
          } else {
            THIS.setState({ isLoading: false })
          }
        })
      })
  }
}
