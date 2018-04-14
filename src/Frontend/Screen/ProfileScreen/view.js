import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'

// Other Components
import styles from './styles'
import images from '*/Image'
import FastImage from 'react-native-fast-image'
import I18n from '*/Lang'
import {
  searchIconSmall,
  repeatIcon, backwardIcon, forwardIcon, playIcon, icVertical, addPlaylist, infoIcon,
  pauseIcon, icShuffle, iconHeart, iconHeartActive, iconBack, playListRemove
} from '@/globalIcon'

const followData = [{ key: '0', name: 'Nguyễn yến', image: images.profilePic },
  { key: '1', name: 'Nguyễn yến', image: images.profilePic },
  { key: '2', name: 'Duy Hân', image: images.profilePic },
  { key: '3', name: 'Hà Nguyễn', image: images.profilePic },
  { key: '4', name: 'Vinh thế nguyễn', image: images.profilePic }]
export default class SplashScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {

    }
    props.defaultThis(this)
  }

  renderFollow=({item}) => {
    return (
      <View style={styles.followSubContainer}>
        <Image source={item.image} style={styles.followImage}/>
        <Text style={styles.textNameFollow}>{item.name}</Text>
      </View>
    )
  }

  renderSong = ({ item }) => {
    return (
      <View style={styles.songContainer}>
        <FastImage style={styles.imgSong}
          source={{
            uri: item.image,
            priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover} />
        <Text style={styles.textNameFollow}>{item.name}</Text>
      </View>
    )
  }

  render () {
    const { userData, handleBackRoute } = this.props
    return (
      <View>
        <Image source={images.profilebg} style={styles.backgroundStyle} />

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackRoute} style={styles.backRoute}>
            {iconBack}
          </TouchableOpacity>
          <Text style={styles.txtTitle}>{I18n.t('myProfile')}</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.circle1}>
            <View style={styles.circle2}>
              <View style={styles.circle3}>
                <FastImage style={styles.imgProfile}
                  source={{
                    uri: userData.image,
                    priority: FastImage.priority.high
                  }}
                  resizeMode={FastImage.resizeMode.cover} />

              </View>
            </View>
          </View>

          <View style={styles.otherInfo}>
            <Text style={styles.textName}>{userData.username}</Text>
            <Text style={styles.textSong}>{userData.mySong.length + space + I18n.t('song')}</Text>
          </View>

        </View>
        <View style={styles.followContainer}>
          <Text style={styles.textTitle}>{I18n.t('follow')}</Text>
          <FlatList
            horizontal={true}
            data={followData}
            renderItem={this.renderFollow}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.grayLine} />

          <Text style={styles.textTitle}>{I18n.t('mySong')}</Text>
          <FlatList
            horizontal={true}
            data={userData.mySong}
            renderItem={this.renderSong}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.grayLine} />

          <Text style={styles.textTitle}>{I18n.t('myAlbum')}</Text>
          <FlatList
            horizontal={true}
            data={userData.mySong}
            renderItem={this.renderSong}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.grayLine} />
        </View>

      </View>
    )
  }
}
