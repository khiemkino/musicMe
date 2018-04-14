import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export const width = num => Dimensions.get('window').width * (num / 100)
export const height = num => Dimensions.get('window').height * (num / 100)

export const AppFont = {
  regular: 'SanFranciscoText-Regular'
}

export const AppColor = {
  main: 'rgb(249,99,50)',
  green: 'rgb(139,195,74)',
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
    backgroundColor: '#F4F3F3'
  }
})

export default styles
