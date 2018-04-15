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
import { AppSearchBar } from '~/Components/AppInput'
import { getMinutes, keyExtractor } from '@/globalFunction'
import {
  searchIconSmall, searchIcon, icClose,
  repeatIcon, backwardIcon, forwardIcon, playIcon, icVertical, addPlaylist, infoIcon,
  pauseIcon, icShuffle, iconBack, playListRemove
} from '@/globalIcon'
import Modal from 'react-native-modalbox'

export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      arrSong: props.songItem,
      songAdded: [],
      songSelect: undefined,
      isPlay: false,
      trackDuration: 0,
      isLoadingSong: false,
      currentTime: null,
      songSelectId: -1,
      songSelectIndex: -1,
      isActiveSearch: false,
      txtSearch: '',
      isNoData: false,
      resultData: null
    }
    props.defaultThis(this)
  }

  componentDidMount () {
    this.props.loadingSong()
  }

  selectSong = (item) => () => this.props.selectSong(item)
  handleSelectSong = (item, index) => () => this.props.handleSelectSong(item, index)

  renderSong = ({ item, index }) => {
    const { songSelectId } = this.state
    return (
      <TouchableOpacity onPress={this.handleSelectSong(item, index)} style={styles.songContainer}>
        <View style={styles.leftContainer}>
          <View>
            <FastImage style={styles.imgSong}
              source={{
                uri: item.image,
                priority: FastImage.priority.normal
              }}
              resizeMode={FastImage.resizeMode.cover} />
            {songSelectId === item.id && <Image source={images.playIcon} style={styles.playIcon} />}
          </View>
          <View>
            <Text style={styles.textSongName}>{item.name}</Text>
            <Text style={styles.textSongSinger}>{item.singer}</Text>
          </View>

        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={this.selectSong(item)} style={styles.addSong} >
          {icVertical}
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  render () {
    const { isNoData, songSelectId, txtSearch, isActiveSearch, songSelectIndex, isLoadingSong, arrSong, isLoading, currentTime, trackDuration, isPlay, songSelect, songAdded } = this.state
    const { handleClearInput, handleActivePlay, handleSelectNextSong, handleActiveSearch, handleInputSearch, handleResults,
      handleSelectPreviousSong, handleAddSong, handleOpenInfo, handleCloseInfo, handleBackRoute } = this.props
    let isExist
    if (songSelect) {
      isExist = songAdded.includes(songSelect.id)
    }
    const isFirst = (songSelectIndex === 0 || songSelectIndex === -1)
    const isLast = (songSelectIndex === (arrSong.length - 1) || songSelectIndex === -1)
    return (
      <View style={styles.container}>
        <Image source={images.backgroundSong} style={styles.backgroundStyle} />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackRoute} style={styles.backRoute}>
            {iconBack}
          </TouchableOpacity>
          {
            isActiveSearch ? <AppSearchBar
              searchData={arrSong}
              value={txtSearch}
              handleClearInput={handleClearInput}
              containerStyle={styles.inputSearch}
              renderLeft={searchIcon}
              renderRight={icClose}
              handleInputSearch={handleInputSearch}
              txtHolder={I18n.t('search')}
              handleResults={handleResults}
            /> : <Text style={styles.txtTitle}>{I18n.t('mySong')}</Text>
          }
          {
            !isActiveSearch && <TouchableOpacity onPress={handleActiveSearch} >
              {searchIcon}
            </TouchableOpacity>
          }
        </View>
        <Animatable.View
          transition={'opacity'}
          style={(isLoadingSong || songSelectId === -1) ? styles.footerPage : styles.footerPageActive}
          pointerEvents={(isLoadingSong || songSelectId === -1) ? 'none' : 'box-none'}>
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

        {
          isNoData
            ? <View style={styles.noresultContainer}>
              <Image source={images.noresult} style={styles.imgNoresult} />
            </View>
            : <Animatable.View pointerEvents={isLoadingSong ? 'none' : 'box-none'} transition={'opacity'} style={isLoadingSong ? styles.songListContainer : styles.songListContainerActive}>
              <FlatList
                data={arrSong}
                extraData={this.state}
                keyExtractor={keyExtractor}
                renderItem={this.renderSong}
              />
            </Animatable.View>

        }

        {
          isLoadingSong && <SpinnerKit style={styles.spkSpinner} size={height(10)} type={'FadingCircleAlt'} />
        }
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
