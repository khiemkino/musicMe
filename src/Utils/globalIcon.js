
import React from 'react'
// import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { width } from '@/globalStyles'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const blackColor = '#5F5F5F'

// Ionicons
export const icClose = <Ionicons name={'ios-close'} size={width(9)} color={blackColor} />
export const lockIcon = <Ionicons name='ios-lock' size={width(5)} color={'white'} />
export const menuIcon = <Ionicons name='ios-menu' size={width(10)} color={'black'} />
export const searchIcon = <Ionicons name='ios-search' size={width(8)} color={'black'} />
export const iconFlash = <Ionicons name='md-flash' size={width(4)} color={'white'} />
export const iconBack = <Ionicons name='ios-arrow-back' size={width(8)} color={'black'} />
export const iconDown = <Ionicons name='md-arrow-dropdown' size={width(4)} color={'black'} />
export const iconPricetag = <Ionicons name='md-pricetags' size={width(5)} color={blackColor} />
export const icSetting = <Ionicons name='ios-settings' size={width(7)} color={'white'} />
export const icEye = <Ionicons name='md-eye' size={width(4)} color={'white'} />
export const icCloseLarge = <Ionicons name='md-close' size={width(4)} color={'white'} />
export const copyIcon = <Ionicons name='ios-copy' size={width(5)} color={blackColor} />

// FontAwesome
export const userIcon = <FontAwesome name='user-o' size={width(5)} color={'white'} />
export const icStar = <FontAwesome name='star-o' size={width(6)} color={'white'} />
export const dollarIcon = <FontAwesome name='dollar' size={width(3.5)} color={blackColor} />
export const checkIcon = <FontAwesome name='check' size={width(11)} color={'white'} />

// MaterialCommunityIcons
export const emailIcon = <MaterialCommunityIcons name='email-outline' size={width(5)} color={'white'} />
export const icHistory = <MaterialCommunityIcons name='history' size={width(6)} color={'white'} />
export const icSignal = <MaterialCommunityIcons name='signal' size={width(4)} color={blackColor} />
export const ethIcon = <MaterialCommunityIcons name='currency-eth' size={width(5)} color={blackColor} />

// Feather
export const referIcon = <Feather name='user-plus' size={width(4)} color={'black'} />
export const iconUp = <Feather name='arrow-up' size={width(4)} color={'#F97855'} />
export const iconDownDb = <Feather name='arrow-down' size={width(4)} color={'#F97855'} />
export const errorIconBlack = <Feather name='x' size={width(4)} color={blackColor} />
export const errorIcon = <Feather name='x' size={width(11)} color={'white'} />
export const checkIconBlack = <Feather name='check' size={width(4)} color={blackColor} />

// SimpleLineIcons
export const bellIcon = <SimpleLineIcons name='bell' size={width(7)} color={'black'} />
export const icHome = <SimpleLineIcons name='home' size={width(5)} color={'white'} />

// Entypo
export const iconShuffle = <Entypo name='shuffle' size={width(3.5)} color={blackColor} />
export const iconFlashBlack = <Entypo name='flash' size={width(4)} color={blackColor} />

// Octicons
export const icBonus = <Octicons name='gift' size={width(6)} color={'white'} />

export const placeIcon = <MaterialIcons name='place' size={width(5)} color={blackColor} />