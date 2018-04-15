import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'
import Camera from 'react-native-camera'
import * as Animatable from 'react-native-animatable'
import { width } from '@/globalStyles'
import { iconBackWhite } from '@/globalIcon'

Animatable.initializeRegistryWithDefinitions({
  animScannerRect: {
    from: {
      top: width(0)
    },
    to: {
      top: width(70)
    }
  }
})
export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      resultsData: ''
    }
    props.defaultThis(this)
  }
  render () {
    const { handleBackRoute, onBarCodeRead } = this.props
    return (
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackRoute}>
            {iconBackWhite}
          </TouchableOpacity>
          <Text style={styles.textTitle}>{'Find your music'}</Text>
          <View/>
        </View>
        <Camera style={styles.cameraContainer}
          type={Camera.constants.Type.back}
          onBarCodeRead={onBarCodeRead} />
        <View style={styles.scanContainer}>
          <View style={styles.scanLineLeftTop}>
            <View style={styles.lineTop} />
            <View style={styles.lineBottom} />
          </View>
          <View style={styles.scanLineCenter}>
            <View style={styles.lineCenter}>
              <View style={styles.lineCenterTop} />
              <View style={styles.lineCenterBottom} />
            </View>
            <View style={styles.lineScanner}>
              <Animatable.View
                animation={'animScannerRect'}
                iterationCount={'infinite'}
                duration={5000}
                easing={'linear'}
                style={styles.lineScannerAnim} />
            </View>
            <View style={styles.lineCenter}>
              <View style={styles.lineLeftTop} />
              <View style={styles.lineLeftBottom} />
            </View>
          </View>
          <View style={styles.lineRightContainer}>
            <View style={styles.lineRightTop} />
            <View style={styles.lineRightBottom} />
          </View>
        </View>
      </View>
    )
  }
}
