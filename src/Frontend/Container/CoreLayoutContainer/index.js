import React, { PureComponent } from 'react'
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import gStyles from '@/globalStyles'
import styles from './styles'
import CoreHeader from './CoreHeader'
import { AppAlert, AppPushNotify, AppInternetAlert } from '~/Components/AppAlert'

class CoreLayoutContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.count = 0
  }

  dismissKeyboard = () => Keyboard.dismiss()

  showAlert (mesage, isError) {
    this.refs.appAlert.alertWithType(mesage, isError)
  }

  get renderContent () {
    const { children, style, isDisableInternetAlert = false } = this.props
    return (
      <View style={gStyles.backgroundDefault} >
        <View style={gStyles.backgroundDefault} >
          <CoreHeader THIS={this} />

          <View style={[gStyles.backgroundDefault, styles.paddingHeader, style]}>
            <StatusBar barStyle="dark-content" />
            {children}
          </View>
          {!isDisableInternetAlert && <AppInternetAlert />}
          <AppPushNotify ref={'appPushNotify'} />

        </View>
        <AppAlert ref={'appAlert'} />
      </View>
    )
  }

  render () {
    const { isTouchDisable = false } = this.props
    return (
      isTouchDisable
        ? <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
          {this.renderContent}
        </TouchableWithoutFeedback>
        : this.renderContent
    )
  }
}

export default CoreLayoutContainer
