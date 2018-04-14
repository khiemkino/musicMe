import React, {PureComponent} from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
// Style Component
import styles from './styles'

import { height } from '@/globalStyles'
import CoreLayout from '~/Container/CoreLayoutContainer'
import images from '*/Image/'
import I18n from '*/Lang'
import SpinnerKit from 'react-native-spinkit'

class LoginScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }
    props.defaultThis(this)
  }

  render () {
    const { isLoading } = this.state
    const { handleLoginFacebook } = this.props
    return (
      <CoreLayout isTouchDisable={true} headerStyle={styles.headerStyle} style={styles.container}>
        <Text style={styles.welcomeStyle}>{I18n.t('welcome')}</Text>
        <Image source={images.logo} style={styles.logoStyle}/>
        <Image source={images.background} style={styles.backgroundStyle} />

        {
          isLoading
            ? <SpinnerKit style={styles.spkSpinner} size={height(5)} type={'FadingCircleAlt'} />
            : <TouchableOpacity activeOpacity={0.7} onPress={handleLoginFacebook}>
              <Image source={images.btnFacebook} style={styles.btnStyle} />
            </TouchableOpacity>
        }

      </CoreLayout>
    )
  }
}
export default LoginScreen
