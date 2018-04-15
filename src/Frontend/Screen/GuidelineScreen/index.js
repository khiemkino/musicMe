import React from 'react'
import { Image } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'
import Carousel from 'react-native-snap-carousel'
import { keyExtractor } from '@/globalFunction'
import { width } from '@/globalStyles'
import { Actions, ActionConst } from 'react-native-router-flux'
import store from 'react-native-simple-store'

const imgData = [images.guideLine1, images.guideLine2, images.guideLine3, images.guideLine4]
export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleSnapToItem = this.handleSnapToItem.bind(this)
  }

    renderItem = ({ item }) => {
      return (
        <Image source={item} style={styles.imgGuideLine} />
      )
    }

    handleSnapToItem (index) {
      if (index === (imgData.length - 1)) {
        setTimeout(() => {
          Actions.loginScreen({ type: ActionConst.RESET })
          store.save('Guide', true)
        }, 500)
      }
    }

    render () {
      return (
        <Carousel
          data={imgData}
          renderItem={this.renderItem}
          sliderWidth={width(100)}
          itemWidth={width(100)}
          keyExtractor={keyExtractor}
          onSnapToItem={this.handleSnapToItem}
        />
      )
    }
}
