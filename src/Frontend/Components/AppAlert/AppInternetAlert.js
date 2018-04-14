import React, { Component } from 'react'

// View component
import styles from './styles'
import { Text } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
// Redux
import { connect } from 'react-redux'
import * as Animatable from 'react-native-animatable'
// Language
import I18n from '*/Lang'

/**
 * NAME: INTERNET ALERT
 * CREATOR: KHIEM
 * Display Wallet Page and show Main card, Token card
 */
class InternetAlert extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: true
    }
  }

  componentWillMount () {
    this.internetListener = EventRegister.addEventListener('internetChange', () => {
      this.internetShow()
    })
  }

  componentWillUnmount () {
    EventRegister.removeEventListener(this.internetListener)
  }

  /**
   * NAME: internetShow
   * Render animated for internet show
   */
  async internetShow () {
    var self = this
    setTimeout(() => {
      self.internet && self.setState({isActive: false})
    }, 1100)
  }

  // |------------------------------|
  // |--- RENDER MAIN VIEW START ---|
  // |------------------------------|
  render () {
    const { isActive } = this.state
    const { internetData } = this.props
    return (
      !internetData
        ? <Animatable.View ref={(ref) => { this.internet = ref }} animation={'fadeIn'}
          onAnimationEnd={() => this.internetShow()} style={[styles.internetContent, {zIndex: isActive ? 5 : -1}]}>
          <Text style={styles.txtInternet}>{I18n.t('Initial.NetworkConErr')}</Text>
        </Animatable.View> : null
    )
  }
}

const mapStateToProps = (state) => {
  return {
    internetData: state.internetData
  }
}

export default connect(mapStateToProps)(InternetAlert)
