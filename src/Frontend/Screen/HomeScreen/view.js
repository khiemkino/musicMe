import React, { PureComponent } from 'react'
import { Image, View, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native'

// Other Components
import I18n from '*/Lang'
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import { keyExtractor } from '@/globalFunction'
import { AppSearchBar } from '~/Components/AppInput'
import { menuIcon, searchIcon, icClose } from '@/globalIcon'
import Drawer from 'react-native-drawer'
import Menu from '~/Screen/MenuScreen'
import { width } from '@/globalStyles'

export default class HomeScreen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      arrSong: [],
      txtSearch: '',
      isLoading: true
    }
    props.defaultThis(this)
  }

  componentDidMount () {
    this.props.loadingSong()
  }

  handleToSong = (item) => () => this.props.handleToSong(item)

  renderSong = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.handleToSong(item)} style={styles.songContainer}>

        <FastImage style={styles.imgSong}
          source={{
            uri: item.image,
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.cover} />

        <Text style={styles.textSongName}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  routePlayList = (song, title) => () => this.props.routePlayList(song, title)

  render () {
    const { arrSong, isLoading, txtSearch, handleClearInput, handleInputSearch, handleResults } = this.state
    const { routeMySong, handleOpenMenu, userData, handleOpenScanQr } = this.props
    return (
      <Drawer
        ref={'drawer'}
        content={<Menu />}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={width(30)}
        tweenHandler={(ratio) => ({
          main: { opacity: (1.2 - ratio) / 1.2 }
        })}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleOpenMenu}>
              {menuIcon}
            </TouchableOpacity>
            <View/>
          </View>
          <View style={styles.findContainer}>
            <Text style={styles.textFindMusic}>{'Find your music'}</Text>
            <TouchableOpacity onPress={handleOpenScanQr}>
              <Image source={images.scanQr} style={styles.qrHeader} />
            </TouchableOpacity>
          </View>
          {
            isLoading
              ? <View style={styles.loadingContainer}>
                <Image source={images.loading} style={styles.imgLoading} />
              </View>
              : <ScrollView style={styles.playListContainer}>
                <TouchableOpacity onPress={this.routePlayList(arrSong, I18n.t('newPlaylist'))}>
                  <Text style={styles.textTitle}>{I18n.t('newPlaylist')}</Text>
                </TouchableOpacity>
                <FlatList
                  data={arrSong}
                  horizontal={true}
                  extraData={this.state}
                  keyExtractor={keyExtractor}
                  renderItem={this.renderSong}
                />
                <TouchableOpacity onPress={this.routePlayList(arrSong, I18n.t('hotPlaylist'))}>
                  <Text style={styles.textTitle}>{I18n.t('hotPlaylist')}</Text>
                </TouchableOpacity>
                <FlatList
                  data={arrSong}
                  horizontal={true}
                  extraData={this.state}
                  keyExtractor={keyExtractor}
                  renderItem={this.renderSong}
                />
                <TouchableOpacity onPress={routeMySong}>
                  <Text style={styles.textTitle}>{I18n.t('mySong')}</Text>
                </TouchableOpacity>
                <FlatList
                  data={userData.mySong}
                  horizontal={true}
                  extraData={this.state}
                  keyExtractor={keyExtractor}
                  renderItem={this.renderSong}
                />
              </ScrollView>
          }

        </View>
      </Drawer>
    )
  }
}
