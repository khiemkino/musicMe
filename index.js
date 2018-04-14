import { AppRegistry, Platform, Text } from 'react-native'

import MusicMe from './src/music'

import { AppColor } from '@/globalStyles'
import EStyleSheet from 'react-native-extended-stylesheet'

global.ISIOS = Platform.OS === 'ios'
global.space = ' '
Text.defaultProps.allowFontScaling = false

// DEFAULT GLOBAL STYLE FOR ZIGNAL
EStyleSheet.build({
  $main: AppColor.main,
  $green: AppColor.green,
  $black: AppColor.black,
  $gray: AppColor.gray,
  $textColor: 'rgb(44,44,44)',
  $fontRegular: 'SanFranciscoText-Regular',
  $fontBold: 'SanFranciscoText-Bold',
  $fontLight: 'SanFranciscoText-Light',
  $fontMedium: 'SanFranciscoText-Medium'
})

AppRegistry.registerComponent('MusicMe', () => MusicMe)
