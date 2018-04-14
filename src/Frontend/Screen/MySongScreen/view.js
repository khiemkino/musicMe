import React from 'react'
import { Image, View, FlatList, Text, TouchableOpacity } from 'react-native'

// Other Components
import * as Animatable from 'react-native-animatable'
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import I18n from '*/Lang'

import { width, height } from '@/globalStyles'
import SpinnerKit from 'react-native-spinkit'
import { getMinutes, keyExtractor } from '@/globalFunction'
import {
  searchIconSmall,
  repeatIcon, backwardIcon, forwardIcon, playIcon, icVertical, addPlaylist, infoIcon,
  pauseIcon, icShuffle, iconHeart, iconHeartActive, iconBack, playListRemove
} from '@/globalIcon'
import Modal from 'react-native-modalbox'

export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      arrSong: [],
      songAdded: [],
      songSelect: undefined
    }
    props.defaultThis(this)
  }

  componentDidMount () {
    this.props.loadingSong()
  }

  selectSong = (item) => () => this.props.selectSong(item)

  renderSong = ({ item }) => {
    return (
      <View style={styles.songContainer}>
        <View style={styles.leftContainer}>
          <FastImage style={styles.imgSong}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover} />
          <View>
            <Text style={styles.textSongName}>{item.name}</Text>
            <Text style={styles.textSongSinger}>{item.singer}</Text>
          </View>

        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={this.selectSong(item)} style={styles.addSong} >
          {icVertical}
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    const { arrSong, isLoading, currentTime, trackDuration, isPlay, songSelect, songAdded } = this.state
    const { handleActivePlay, handleAddSong, handleOpenInfo, handleCloseInfo, handleBackRoute } = this.props
    let isExist
    if (songSelect) {
      isExist = songAdded.includes(songSelect.id)
    }

    return (
      <View style={styles.container}>
        <Image source={images.backgroundSong} style={styles.backgroundStyle} />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackRoute} style={styles.backRoute}>
            {iconBack}
          </TouchableOpacity>
          <Text style={styles.txtTitle}>{I18n.t('mySong')}</Text>
          {searchIconSmall}
        </View>

        <Animatable.View style={isLoading ? styles.footerPage : styles.footerPageActive} pointerEvents={isLoading ? 'none' : 'box-none'}>
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

        <View style={styles.songListContainer}>
          <FlatList
            data={arrSong}
            extraData={this.state}
            keyExtractor={keyExtractor}
            renderItem={this.renderSong}
          />

        </View>
        {songSelect &&
          <Modal style={styles.modal} position={'bottom'} ref={'mdPlaylist'}>
            <View style={styles.playListContainer}>
              <View style={styles.subPlayContainer}>
                <FastImage style={styles.imgSong}
                  source={{
                    uri: songSelect.image,
                    priority: FastImage.priority.normal
                  }}
                  resizeMode={FastImage.resizeMode.cover} />
                <View>
                  <Text style={styles.textSongName}>{songSelect.name}</Text>
                  <Text style={styles.textSongSinger}>{songSelect.singer}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={handleAddSong} style={styles.subPlayContainer}>
                {isExist ? playListRemove : addPlaylist}
                <Text style={styles.textSub}>{isExist
                  ? I18n.t('removeSong')
                  : I18n.t('addSong')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenInfo} style={styles.subPlayContainer}>
                {infoIcon}
                <Text style={styles.textSub}>{I18n.t('songInfo')}</Text>
              </TouchableOpacity>
            </View>
            <Modal style={styles.modal} position={'bottom'} ref={'mdInfo'}>
              <Text style={styles.textInfoTitle}>{I18n.t('songInfoDetail')}</Text>
              <View style={styles.playListContainer}>
                <View style={styles.subPlayContainer}>
                  <FastImage style={styles.imgInfo}
                    source={{
                      uri: songSelect.image,
                      priority: FastImage.priority.normal
                    }}
                    resizeMode={FastImage.resizeMode.cover} />
                  <View>
                    <View style={styles.rowInfoContainer}>
                      <Text style={styles.textSubTitle}>{I18n.t('song')}</Text>
                      <Text style={styles.textSongName}>{songSelect.name}</Text>
                    </View>
                    <View style={styles.grayLine}/>

                    <View style={styles.rowInfoContainer}>
                      <Text style={styles.textSubTitle}>{I18n.t('singer')}</Text>
                      <Text style={styles.textSongName}>{songSelect.singer}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={handleCloseInfo} style={styles.footerSub}>
                  <View style={styles.grayFooterLine}/>
                  <Text style={styles.textSongName}>{I18n.t('close')}</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Modal>
        }

      </View>
    )
  }
}
