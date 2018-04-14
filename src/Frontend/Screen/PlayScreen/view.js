import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import { width, height } from '@/globalStyles'
import SpinnerKit from 'react-native-spinkit'
import { getMinutes } from '@/globalFunction'
import {
  repeatIcon, backwardIcon, forwardIcon, playIcon,
  pauseIcon, icShuffle, iconHeart, iconHeartActive, iconBack
} from '@/globalIcon'

Animatable.initializeRegistryWithDefinitions({
  rotate: {
    from: {
      transform: [{ rotate: '0deg' }]
    },
    to: {
      transform: [{ rotate: '360deg' }]
    }
  }
})

export default class PlayScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isLove: false,
      isPlay: false,
      trackDuration: 0,
      isLoading: true,
      currentTime: null
    }
    props.defaultThis(this)
  }

  render () {
    const { songItem, handleActiveLike, handleBackRoute, handleActivePlay } = this.props
    const { isLove, isPlay, isLoading, trackDuration, currentTime } = this.state

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
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover} />
        <Animatable.View duration={10000}
          easing={'ease'}
          {...isPlay ? { animation: 'rotate' } : null}
          iterationCount="infinite" >
          <Animatable.View transition={'opacity'} style={isLoading ? styles.songShadow : styles.songShadowActive}>
            {
              isLoading && <SpinnerKit style={styles.spkSpinner} size={height(10)} type={'FadingCircleAlt'} />
            }
            <FastImage style={styles.songImage}
              source={{
                uri: songItem.image,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.cover} />
          </Animatable.View>
        </Animatable.View>
        <Text style={styles.textNameSong}>{songItem.name}</Text>
        <Text style={styles.textNameAlbum}>{songItem.album}</Text>

        <Animatable.View transition={'opacity'} style={isLoading ? styles.footerPage : styles.footerPageActive} pointerEvents={isLoading ? 'none' : 'box-none'}>
          <View style={styles.timeContainer}>
            <Text style={styles.textTime}>{currentTime ? getMinutes(currentTime) : '0:00'}</Text>
            <Text style={styles.textTime}>{trackDuration !== 0 ? getMinutes(trackDuration) : '...'}</Text>
          </View>
          <View style={styles.playContainer}>
            <Animatable.View transition={'width'}
              duration={10} style={[styles.playActiveContainer, { width: currentTime ? width(95) * (((currentTime / trackDuration) * 100) / 100) : 0 }]}>
              <Animatable.View transition={'left'}
                duration={10} style={[styles.dotContainer, { left: currentTime ? width(90) * (((currentTime / trackDuration) * 100) / 100) : 0 }]} />
            </Animatable.View>
          </View>
          <View style={styles.footerContainer}>
            {repeatIcon}
            <View style={styles.btnPlayContainer}>
              {backwardIcon}
              <TouchableOpacity onPress={handleActivePlay} style={styles.btnPlay}>
                {isPlay ? pauseIcon : playIcon}
              </TouchableOpacity>
              {forwardIcon}
            </View>
            {icShuffle}
          </View>

        </Animatable.View>
      </View>
    )
  }
}
