import React, { PureComponent } from 'react'
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import gStyles from '@/globalStyles'
import styles from './styles'
import CoreHeader from './CoreHeader'

class CoreLayoutContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.count = 0
  }

  dismissKeyboard = () => Keyboard.dismiss()

  get renderContent () {
    const { children, style } = this.props
    return (
      <View style={gStyles.backgroundDefault} >
        <View style={gStyles.backgroundDefault} >
          <CoreHeader THIS={this} />

          <View style={[gStyles.backgroundDefault, styles.paddingHeader, style]}>
            <StatusBar barStyle="dark-content" />
            {children}
          </View>
        </View>
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
