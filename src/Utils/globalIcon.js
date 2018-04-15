
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { width } from '@/globalStyles'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const blackColor = '#5F5F5F'

// Ionicons
export const icShuffle = <Ionicons name={'ios-shuffle'} size={width(9)} color={blackColor} />
export const icClose = <Ionicons name={'ios-close'} size={width(9)} color={blackColor} />
export const menuIcon = <Ionicons name='ios-menu' size={width(9)} color={'black'} />
export const searchIcon = <Ionicons name='ios-search' size={width(8)} color={'black'} />
export const searchIconSmall = <Ionicons name='ios-search' size={width(6)} color={'black'} />
export const iconBack = <Ionicons name='ios-arrow-back' size={width(8)} color={'black'} />
export const iconBackWhite = <Ionicons name='ios-arrow-back' size={width(8)} color={'white'} />

// FontAwesome
export const backwardSmallIcon = <FontAwesome name='backward' size={width(4)} color={'black'} />
export const forwardSmallIcon = <FontAwesome name='forward' size={width(4)} color={'black'} />
export const backwardIcon = <FontAwesome name='backward' size={width(5)} color={'black'} />
export const forwardIcon = <FontAwesome name='forward' size={width(5)} color={'black'} />

// MaterialCommunityIcons
export const playListRemove = <MaterialCommunityIcons name='playlist-remove' size={width(7)} color={blackColor} />

// Feather
export const repeatIcon = <Feather name='repeat' size={width(6)} color={blackColor} />

// SimpleLineIcons
export const icVertical = <SimpleLineIcons name='options-vertical' size={width(5)} color={'black'} />

// Entypo
export const iconHeartActive = <FontAwesome name='heart' size={width(7)} color={'#FFE803'} />
export const iconHeart = <FontAwesome name='heart-o' size={width(7)} color={'black'} />

export const playSmallIcon = <MaterialIcons name='play-arrow' size={width(7)} color={'black'} />
export const pauseSmallIcon = <MaterialIcons name='pause' size={width(7)} color={'#FFF305'} />
export const playIcon = <MaterialIcons name='play-arrow' size={width(10)} color={'black'} />
export const pauseIcon = <MaterialIcons name='pause' size={width(10)} color={'#FFF305'} />
export const placeIcon = <MaterialIcons name='place' size={width(5)} color={blackColor} />
export const infoIcon = <MaterialIcons name='info-outline' size={width(7)} color={blackColor} />

export const addPlaylist = <MaterialIcons name='playlist-add' size={width(7)} color={blackColor} />
