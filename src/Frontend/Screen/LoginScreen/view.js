import React, {PureComponent} from 'react'
import { TouchableOpacity, Image } from 'react-native'
// Style Component
import styles from './styles'

import { height } from '@/globalStyles'
import CoreLayout from '~/Container/CoreLayoutContainer'
import images from '*/Image/'
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
        {/* <Image source={images.logo} style={styles.logoStyle}/>
        {
          isLoading
            ? <SpinnerKit style={styles.spkSpinner} size={height(5)} type={'FadingCircleAlt'} />
            : <TouchableOpacity activeOpacity={0.7} onPress={handleLoginFacebook}>
              <Image source={images.facebook} style={styles.socialLogo}/>
            </TouchableOpacity>
        } */}

      </CoreLayout>
    )
  }
}
export default LoginScreen
