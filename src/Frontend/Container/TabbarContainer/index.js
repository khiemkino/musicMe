import React from 'react'
import { Image, View, TouchableOpacity, Text } from 'react-native'

import HomeScreen from '~/Screen/HomeScreen'
import PlayListScreen from '~/Screen/PlayListScreen'
import ComingSoon from '~/Screen/ComingSoon'
import AlbumScreen from '~/Screen/AlbumScreen'
import { iconHeart } from '@/globalIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { EventRegister } from 'react-native-event-listeners'
import images from '*/Image'
import I18n from '*/Lang'
import styles from './styles'
import { width } from '@/globalStyles'
// custom modal
import { AppAlert } from '~/Components/AppAlert'

const icons = [
  { key: '0', icon: 'home', label: 'home' },
  { key: '1', icon: 'album', label: 'album' },
  { key: '2', icon: 'library-music', label: 'playlist' },
  { key: '3', icon: 'heart', label: 'favorite' }
]
class TabbarTopScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActivePage: 0
    }
  }

  showAlert (mesage, isError) {
    this.refs.appAlert.alertWithType(mesage, isError)
  }

  goToPage (isActivePage) {
    EventRegister.emit('stopPlaying')
    this.setState({ isActivePage })
  }

  render () {
    const { isActivePage } = this.state

    let PageRender

    switch (isActivePage) {
    case 0: PageRender = <HomeScreen />; break
    case 1: PageRender = <AlbumScreen />; break
    case 2: PageRender = <PlayListScreen />; break
    case 3: PageRender = <ComingSoon />; break
    default:
      break
    }

    return (
      <View style={{flex: 1}}>
        {PageRender}
        <Image source={images.backgroundInside} style={styles.backgroundStyle} />
        <AppAlert ref={'appAlert'} />
        <View style={styles.tabs}>
          {icons.map((tab, i) => {
            return (
              <TouchableOpacity disabled={isActivePage === i} activeOpacity={1}
                key={i} onPress={() => this.goToPage(i)} style={styles.tab}>
                <View style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: isActivePage === i ? 1 : 0.5
                }}>
                  {
                    i === 3
                      ? iconHeart
                      : <MaterialIcons name={icons[i].icon} size={width(7)} color={'black'} />
                  }

                  <Text numberOfLines={1}
                    style={styles.txtStyle}>{I18n.t(icons[i].label)}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

    )
  }
}

export default TabbarTopScreen
