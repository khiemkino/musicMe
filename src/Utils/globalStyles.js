import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export const width = num => Dimensions.get('window').width * (num / 100)
export const height = num => Dimensions.get('window').height * (num / 100)

export const AppFont = {
  regular: 'SanFranciscoText-Regular'
}

export const AppColor = {
  main: '#FFE803',
  black: '#0E0E0E',
  gray: 'rgb(105,105,105)'
}

export const txtDefault = {
  color: 'rgb(44,44,44)',
  fontSize: width(3.5),
  backgroundColor: 'transparent',
  fontFamily: AppFont.regular
}

const styles = EStyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default styles
