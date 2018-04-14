import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import { width, height } from '@/globalStyles'
import {
  repeatIcon, backwardIcon, forwardIcon, playIcon,
  pauseIcon, icShuffle, iconHeart, iconHeartActive, iconBack } from '@/globalIcon'

Animatable.initializeRegistryWithDefinitions({
  rotate: {
    from: {
      transform: [{ rotate: '0deg' }]
    },
    to: {
      transform: [{ rotate: '360deg' }]
    }
  },
  move: {
    from: {
      width: 0
    },
    to: {
      width: width(95)
    }
  },
  moveDot: {
    from: {
      left: -width(3)
    },
    to: {
      left: width(92)
    }
  }
})

export default class PlayScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isLove: false,
      isPlay: false
    }
    props.defaultThis(this)
  }

  render () {
    const { songItem, handleActiveLike, handleBackRoute, handleActivePlay } = this.props
    const { isLove, isPlay } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.likeContainer} onPress={handleBackRoute}>
            {iconBack}
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeContainer} onPress={handleActiveLike}>
            {isLove ? iconHeartActive : iconHeart}
          </TouchableOpacity>
        </View>
        <FastImage style={styles.backgroundStyle}
          source={{
            uri: songItem.image,
            priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover} />
        <Animatable.View duration={5000} easing={'ease'} animation="rotate" iterationCount="infinite" style={styles.songShadow}>
          <FastImage style={styles.songImage}
            source={{
              uri: songItem.image,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover} />
        </Animatable.View>
        <Text style={styles.textNameSong}>{songItem.name}</Text>
        <Text style={styles.textNameAlbum}>{songItem.album}</Text>
        <View style={styles.footerPage}>
          <View style={styles.playContainer}>
            <Animatable.View animation={'move'} iterationCount="infinite" duration={20000} style={styles.playActiveContainer}>
              <Animatable.View animation='moveDot' iterationCount="infinite" duration={20000} style={styles.dotContainer} />
            </Animatable.View>

          </View>

          <View style={styles.footerContainer}>
            {repeatIcon}
            <View style={styles.btnPlayContainer}>
              {backwardIcon}
              <TouchableOpacity onPress={handleActivePlay} style={styles.btnPlay}>
                {isPlay ? playIcon : pauseIcon}
              </TouchableOpacity>
              {forwardIcon}
            </View>
            {icShuffle}
          </View>

        </View>
      </View>
    )
  }
}
