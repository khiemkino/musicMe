import React from 'react'
import { Image, NetInfo } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'

export default class SplashScreen extends React.PureComponent {
  componentWillMount () {
    NetInfo.isConnected.addEventListener('connectionChange', this.props.handleConnectionChange)
  }

  async componentDidMount () {
    this.props.handleChangeRoute()
  }

  render () {
    return (
      <Image source={images.splashcreen} style={styles.backgroundImage} />
    )
  }
}
