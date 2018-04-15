import React from 'react'
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'
import {
  iconBack, searchIcon, icClose, backwardSmallIcon, iconHeartActive, iconHeart,
  pauseSmallIcon, playSmallIcon, forwardSmallIcon } from '@/globalIcon'
import FastImage from 'react-native-fast-image'
import I18n from '*/Lang'
import { height } from '@/globalStyles'
import { AppSearchBar } from '~/Components/AppInput'
import { keyExtractor, getMinutes } from '@/globalFunction'
import Modal from 'react-native-modalbox'
import * as Animatable from 'react-native-animatable'
import SpinnerKit from 'react-native-spinkit'

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

export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isActiveSearch: false,
      txtSearch: '',
      isNoData: false,
      resultData: null,
      songSelect: null,
      isPlay: false,
      songSelectIndex: -1,
      songSelectId: -1,
      isLoadingSong: false,
      trackDuration: 0,
      currentTime: null,
      isFavorite: false
    }
    props.defaultThis(this)
  }

  handlePlaySong = (item, index) => () => this.props.handlePlaySong(item, index)

  renderSong=({item, index}) => {
    const { songSelectId, isLoadingSong } = this.state
    return (
      <TouchableOpacity disabled={isLoadingSong} onPress={this.handlePlaySong(item, index)} style={styles.songContainer}>
        <View style={styles.shadowView}>
          <FastImage style={styles.imgSong}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.cover} />
          {songSelectId === item.id && <Image source={images.playIcon} style={styles.playIcon} />}
        </View>

        <Text style={styles.textSongName}>{item.name}</Text>
        <Text style={styles.textSongSinger}>{item.singer}</Text>

      </TouchableOpacity>
    )
  }

  render () {
    const { currentTime, isActiveSearch, txtSearch, resultData, isNoData, songSelect, isPlay, songSelectIndex, isFavorite, isLoadingSong } = this.state
    const { titleName, arrSong, handleBackRoute, handleActiveSearch, handleActivePlay, handleSelectNextSong, handleSelectPreviousSong,
      handleClearInput, handleInputSearch, handleResults, handleFavorite } = this.props

    const isFirst = (songSelectIndex === 0 || songSelectIndex === -1)
    const isLast = (songSelectIndex === (arrSong.length - 1) || songSelectIndex === -1)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={isActiveSearch ? handleActiveSearch : handleBackRoute} style={styles.backIcon}>
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
            /> : <Text style={styles.textHeader}>{titleName}</Text>
          }
          {
            !isActiveSearch && <TouchableOpacity onPress={handleActiveSearch} >
              {searchIcon}
            </TouchableOpacity>
          }

        </View>
        {
          isNoData
            ? <View style={styles.noresultContainer}>
              <Image source={images.noresult} style={styles.imgNoresult}/>
            </View>
            : <Animatable.View style={isLoadingSong ? styles.songlistContainer : styles.songlistContainerActive}>
              {
                isLoadingSong && <SpinnerKit style={styles.spkSpinner} size={height(10)} type={'FadingCircleAlt'} />
              }
              <FlatList
                data={resultData || arrSong}
                numColumns={2}
                scrollEnabled={!isLoadingSong}
                keyExtractor={keyExtractor}
                extraData={this.state}
                renderItem={this.renderSong}
              />
            </Animatable.View>
        }

        <Modal style={styles.modal} backdrop={false} position={'bottom'} ref={'mdPlaySong'}>
          {
            songSelect &&
            <Animatable.View pointerEvents={isLoadingSong ? 'none' : 'box-none'} style={styles.songplayContainer}>
              <Animatable.View
                style={styles.shadowView}
                duration={10000}
                easing={'ease'}
                {...isPlay ? { animation: 'rotate' } : null}
                iterationCount="infinite" >
                <FastImage style={styles.imgPlaySong}
                  source={{
                    uri: songSelect.image,
                    priority: FastImage.priority.normal
                  }}
                  resizeMode={FastImage.resizeMode.cover} />
              </Animatable.View>
              <View style={styles.infoContainer}>
                <Text style={styles.textSongName}>{songSelect.name}</Text>
                <Text style={styles.textSongSinger}>{songSelect.singer}</Text>
              </View>
              <View style={styles.playFullContainer}>
                <View style={styles.playContainer}>
                  <TouchableOpacity disabled={isFirst} onPress={handleSelectPreviousSong}>
                    <Animatable.View
                      transition={'opacity'}
                      style={isFirst ? styles.inActiveOpacity : styles.activeOpacity}
                    >
                      {backwardSmallIcon}
                    </Animatable.View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleActivePlay}>
                    {isPlay ? pauseSmallIcon : playSmallIcon}
                  </TouchableOpacity>
                  <TouchableOpacity disabled={isLast} onPress={handleSelectNextSong}>
                    <Animatable.View
                      transition={'opacity'}
                      style={isLast ? styles.inActiveOpacity : styles.activeOpacity}
                    >
                      {forwardSmallIcon}
                    </Animatable.View>
                  </TouchableOpacity>

                </View>
                {currentTime && <Text style={styles.textSongDuration}>{getMinutes(currentTime)}</Text>}
              </View>
              <TouchableOpacity onPress={handleFavorite} style={styles.shadowView}>
                {isFavorite ? iconHeartActive : iconHeart}
              </TouchableOpacity>
            </Animatable.View>
          }

        </Modal>

      </View>
    )
  }
}
