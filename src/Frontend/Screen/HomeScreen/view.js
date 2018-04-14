import React, { PureComponent } from 'react'
import { Image, View, FlatList, TouchableOpacity, Text } from 'react-native'

// Other Components
import I18n from '*/Lang'
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import { keyExtractor } from '@/globalFunction'
import { AppSearchBar } from '~/Components/AppInput'
import { menuIcon, searchIcon, icClose } from '@/globalIcon'

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
      <TouchableOpacity onPress={this.handleToSong(item)} style={styles.songContainer}>

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

  render () {
    const { arrSong, isLoading, txtSearch, handleClearInput, handleInputSearch, handleResults } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            {menuIcon}
          </TouchableOpacity>
          <AppSearchBar
            searchData={arrSong}
            value={txtSearch}
            handleClearInput={handleClearInput}
            containerStyle={styles.inputSearch}
            renderLeft={searchIcon}
            renderRight={icClose}
            handleInputSearch={handleInputSearch}
            txtHolder={I18n.t('search')}
            handleResults={handleResults}
          />
        </View>

        {
          isLoading
            ? <View style={styles.loadingContainer}>
              <Image source={images.loading} style={styles.imgLoading} />
            </View>
            : <View style={styles.playListContainer}>
              <Text style={styles.textTitle}>{'Hot Playlist'}</Text>
              <FlatList
                data={arrSong}
                horizontal={true}
                extraData={this.state}
                keyExtractor={keyExtractor}
                renderItem={this.renderSong}
              />
            </View>
        }

      </View>
    )
  }
}
