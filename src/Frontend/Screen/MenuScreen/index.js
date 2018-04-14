import React from 'react'
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'

import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image'
import images from '*/Image'
import styles from './styles'
import { Actions } from 'react-native-router-flux'
import I18n from '*/Lang'

const renderItem = ({ index, item }) => {
  return (
    <TouchableOpacity onPress={item.action} activeOpacity={0.8} style={styles.subMenuContainer}>
      <View style={styles.firstIcon}>
        {item.icon}
      </View>
      <Text style={styles.txtSubMenu}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const MenuView = ({userData}) => {
  const menuData = [
    { key: '0', icon: <Image source={images.home} style={styles.icMenu} />, name: I18n.t('home'), action: () => Actions.profileScreen() },
    { key: '1', icon: <Image source={images.profile} style={styles.icMenu} />, name: I18n.t('profile'), action: () => Actions.profileScreen() },
    { key: '2', icon: <Image source={images.playlist} style={styles.icMenu} />, name: I18n.t('playlist'), action: () => Actions.profileScreen() },
    { key: '3', icon: <Image source={images.rank} style={styles.icMenu} />, name: I18n.t('rank'), action: () => Actions.profileScreen() }
  ]

  return (
    <View style={styles.menuContainer}>
      <Image source={images.backgroundInside} style={styles.backgroundStyle} />
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

      <Text style={styles.txtName}>{userData.username}</Text>
      <View style={styles.menuFlat}>
        <FlatList
          data={menuData}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>

  )
}

const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(MenuView)
