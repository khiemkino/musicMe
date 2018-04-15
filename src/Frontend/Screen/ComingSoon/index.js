import React, { PureComponent } from 'react'
import { Image, View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native'

import styles from './styles'
import images from '*/Image'

export default class HomeScreen extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Image source={images.comingSoon} style={styles.commingSoonImage}/>
        <Text style={styles.comingSoon}>{'Coming Soon'}</Text>
      </View>
    )
  }
}
