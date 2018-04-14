import React from 'react'
import { Image, View, FlatList, Text, TouchableOpacity } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'
import Carousel from 'react-native-snap-carousel'
import { width, height } from '@/globalStyles'
import SpinnerKit from 'react-native-spinkit'
import { keyExtractor, getMinutes } from '@/globalFunction'
import FastImage from 'react-native-fast-image'
import I18n from '*/Lang'
import * as Animatable from 'react-native-animatable'
import { searchIconSmall,
  repeatIcon, backwardIcon, forwardIcon, playIcon,
  pauseIcon, icShuffle
} from '@/globalIcon'
import { EventRegister } from 'react-native-event-listeners'

export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      arrAlbum: [],
      arrSongAlbum: [],
      isLoading: true,
      albumName: '',
      isPlay: false,
      trackDuration: 0,
      isLoadingSong: false,
      currentTime: null,
      songSelectId: -1,
      songSelectIndex: -1
    }
    props.defaultThis(this)
  }

  componentWillMount () {
    this.stopPlaying = EventRegister.addEventListener('stopPlaying', this.props.stopPlaying)
  }

  componentDidMount () {
    this.props.loadingSong()
  }

  componentWillUnmount () {
    EventRegister.removeEventListener(this.stopPlaying)
  }

  renderSong=({item, index}) => {
    const { trackDuration, songSelectId } = this.state

    const isSelect = songSelectId === item.id
    return (
      <TouchableOpacity onPress={this.handleSelectSong(item, index)} >
        <Animatable.View style={isSelect ? styles.songRowContainerPlay : styles.songRowContainer}>
          <View style={styles.indexContainer}>
            {
              isSelect
                ? <Image source={images.songLoading} style={styles.songLoading} />
                : <Text style={styles.textSongIndex}>{(index + 1) + '.'}</Text>
            }
            <View>
              <Text style={isSelect ? styles.textSongTitleActive : styles.textSongTitle}>{item.name}</Text>
              <Text style={isSelect ? styles.textSongSingerActive : styles.textSongSinger}>{item.singer}</Text>
            </View>
          </View>
          {
            isSelect
              ? <Text style={styles.textSongSingerActive}>{getMinutes(trackDuration)}</Text>
              : <View />
          }

        </Animatable.View>
      </TouchableOpacity>
    )
  }

  handleSelectSong = (item, index) => () => this.props.handleSelectSong(item, index)

  renderItem=({item}) => {
    return (
      <View style={styles.songContainer}>
        <View style={styles.songShadowActive}>
          <FastImage style={styles.imgAlbum}
            source={{
              uri: item.album.image,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover} />
          <View style={styles.imgFooter}>
            <Text style={styles.textImgFooter}>{item.album.name}</Text>
            <Text style={styles.textSingerFooter}>{item.songList[0].singer}</Text>
          </View>
        </View>
      </View>
    )
  }

  render () {
    const { arrAlbum, isLoading, albumName, arrSongAlbum, currentTime, trackDuration, isPlay, isLoadingSong, songSelectIndex } = this.state
    const { handleSnapToItem, handleActivePlay, handleSelectNextSong, handleSelectPreviousSong } = this.props

    const isFirst = (songSelectIndex === 0 || songSelectIndex === -1)
    const isLast = (songSelectIndex === (arrSongAlbum.length - 1) || songSelectIndex === -1)

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View/>

          <View style={styles.titleContainer}>
            <Text style={styles.textHeader}>{I18n.t('album')}</Text>
            <Animatable.Text ref={(ref) => { this.titleName = ref }} style={styles.textTitleSong}>{albumName}</Animatable.Text>
          </View>
          {searchIconSmall}
        </View>

        {
          isLoading
            ? <View style={styles.loadingContainer}>
              <Image source={images.loading} style={styles.imgLoading} />
            </View>
            : <Animatable.View transition={'opacity'}
              style={isLoadingSong ? styles.albumContainer : styles.albumContainerActive}
              pointerEvents={isLoadingSong ? 'none' : 'box-none'}>
              {
                isLoadingSong && <SpinnerKit style={styles.spkSpinner} size={height(10)} type={'FadingCircleAlt'} />
              }
              <Carousel
                data={arrAlbum}
                renderItem={this.renderItem}
                sliderWidth={width(100)}
                itemWidth={width(70)}
                keyExtractor={keyExtractor}
                onSnapToItem={handleSnapToItem}
              />
            </Animatable.View>
        }
        <Animatable.View
          transition={'opacity'}
          style={isLoadingSong ? styles.footerPage : styles.footerPageActive}
          pointerEvents={isLoadingSong ? 'none' : 'box-none'}>
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
              <TouchableOpacity disabled={isFirst} onPress={handleSelectPreviousSong}>
                <Animatable.View
                  transition={'opacity'}
                  style={isFirst ? styles.inActiveOpacity : styles.activeOpacity}
                >
                  {backwardIcon}
                </Animatable.View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleActivePlay} style={styles.btnPlay}>
                {isPlay ? pauseIcon : playIcon}
              </TouchableOpacity>
              <TouchableOpacity disabled={isLast} onPress={handleSelectNextSong}>
                <Animatable.View
                  transition={'opacity'}
                  style={isLast ? styles.inActiveOpacity : styles.activeOpacity}
                >
                  {forwardIcon}
                </Animatable.View>
              </TouchableOpacity>
            </View>
            {icShuffle}
          </View>

        </Animatable.View>
        <Animatable.View transition={'opacity'}
          style={isLoadingSong ? styles.songListContainer : styles.songListContainerActive}
          pointerEvents={isLoadingSong ? 'none' : 'box-none'}>
          <FlatList
            data={arrSongAlbum}
            keyExtractor={keyExtractor}
            extraData={this.state}
            renderItem={this.renderSong}
          />

        </Animatable.View>

      </View>
    )
  }
}
