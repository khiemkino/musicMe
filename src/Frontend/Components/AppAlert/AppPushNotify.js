import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { width, height } from '@/globalStyles'
import I18n from '*/Lang'
import BaseAlert from './BaseAlert'

/**
 * NAME: DropdownAlert message
 * CREATOR: Khiem
 * Show alert message
 */
const ISIOS = Platform.OS === 'ios'
export default class HBPushNotify extends BaseAlert {
  // |------------------------------|
  // |--- RENDER MAIN VIEW START ---|
  // |------------------------------|
  render () {
    const { isOpen, message } = this.state
    return (
      isOpen
        ? <View style={styles.viewContainer}>
          {/* BackDrop Container */}
          <Animatable.View
            ref={'pushNotify'}
            duration={500}
            animation={'animPushNotifyActive'}
            onAnimationEnd={() => this.deActiveAlert(true)}
            style={{
              width: width(96),
              alignSelf: 'center'
            }}>
            <View style={[styles.defaultContainer, { borderRadius: ISIOS ? 10 : 0 }]}>
              <View style={{ borderRadius: ISIOS ? 10 : 0,
                backgroundColor: 'white',
                height: height(5),
                width: width(96),
                flexDirection: 'row',
                justifyContent: 'center' }}>
                <View style={{ height: height(5),
                  width: width(45),
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start' }}>

                  <Text style={{ color: 'black' }}>HBWALLET</Text>
                </View>

                <View style={{ height: height(5),
                  width: width(45),
                  alignItems: 'flex-end',
                  justifyContent: 'center' }}>
                  <Text style={{ color: 'black' }}>now</Text>
                </View>
              </View>
              <View style={{ bottom: height(0.7),
                width: width(93),
                height: height(8),
                alignItems: 'flex-start',
                justifyContent: 'center' }}>
                <Text style={[styles.messageStyle,
                  {fontSize: width(I18n.locale === 'jp' ? 3.5 : 4)}]}>{message}</Text>
              </View>
            </View>
          </Animatable.View>
        </View>
        : null
    )
  }
}

var styles = StyleSheet.create({
  messageStyle: {
    textAlign: 'left',
    opacity: 1,
    fontFamily: 'Roboto-Light',
    marginLeft: width(1),
    fontWeight: 'normal',
    color: 'black',
    backgroundColor: 'transparent'
  },
  viewContainer: {
    position: 'absolute',
    height: height(8),
    width: width(100),
    zIndex: 5
  },
  backDropContainer: {
    position: 'absolute',
    opacity: 0.5,
    backgroundColor: 'black',
    height: height(100),
    width: width(100)
  },
  defaultContainer: {
    justifyContent: 'center',
    flexDirection: ISIOS ? 'column' : 'row',
    flexWrap: ISIOS ? 'nowrap' : 'wrap',
    alignItems: 'center',
    height: height(10),
    backgroundColor: '#EDF0EF'
  }

})
