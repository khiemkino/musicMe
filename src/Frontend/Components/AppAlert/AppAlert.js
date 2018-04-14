import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { width, height } from '@/globalStyles'
import I18n from 'react-native-i18n'
import BaseAlert from './BaseAlert'
import * as Animatable from 'react-native-animatable'
import { checkIcon, errorIcon } from '@/globalIcon'
import EStyleSheet from 'react-native-extended-stylesheet'
/**
 * NAME: DropdownAlert message
 * CREATOR: Khiem
 * Show alert message
 */
// const ISIOS = Platform.OS === 'ios'
export default class HBAlert extends BaseAlert {
  render () {
    const { isOpen, type, message, isOut } = this.state
    const { style } = this.props
    var messageLength = (message.length * width(I18n.locale === 'en' ? 4 : 7))
    if (messageLength >= width(77)) {
      messageLength = width(90)
    }
    return (
      isOpen
        ? <View style={[styles.viewContainer, style]}>
          {/* BackDrop Container */}
          <View style={styles.backDropContainer} />
          <Animatable.View
            ref={'viewAlert'}
            duration={300}
            easing={isOut ? 'ease-in-back' : 'ease-out-back'}
            animation={'zoomIn'}
            style={{
              marginTop: height(30),
              width: width(80),
              marginHorizontal: width(10)
            }}>
            {<View style={[styles.defaultContainer, { opacity: 1, borderRadius: 10 }]}>
              <Animatable.View ref={'btnAlert'} easing={isOut ? 'ease-in-back' : 'ease-out-back'} animation={'zoomIn'} style={{
                position: 'absolute',
                backgroundColor: type ? '#696969' : '#8CC54D',
                height: height(11),
                width: height(11),
                top: height(2),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height(5.5)
              }}>
                {type ? errorIcon : checkIcon}
              </Animatable.View>
              <Text style={styles.txtTitle}>{type ? I18n.t('Initial.opps') : I18n.t('Initial.success')}</Text>

              <Text style={styles.messageStyle}>{message}</Text>
              <TouchableOpacity onPress={() => {
                this.setState({ isOut: true })
                var self = this
                this.refs.viewAlert.zoomOut(300)
                this.refs.btnAlert.zoomOut(300)
                setTimeout(() => {
                  self.setState({ isOpen: false, isOut: false })
                }, 500)
              }} style={{
                backgroundColor: type ? '#696969' : '#8CC54D',
                height: height(7),
                position: 'absolute',
                bottom: height(2),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                width: width(70)
              }}>
                <Text style={{ color: 'white', fontSize: width(5) }}>{I18n.t('Initial.ok')}</Text>
              </TouchableOpacity>
            </View>
            }
          </Animatable.View>
        </View> : null
    )
  }
}

var styles = EStyleSheet.create({
  txtTitle: {
    fontSize: width(5),
    marginTop: height(3),
    fontFamily: '$fontRegular',
    color: '$textColor'
  },
  modal: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: height(15),
    backgroundColor: 'white'
  },
  messageModal: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: height(17),
    width: width(100),
    backgroundColor: 'white'
  },
  viewAlertContainer: {
    width: width(10),
    padding: width(1)
  },
  messageStyle: {
    paddingTop: height(1),
    fontSize: width(3.5),
    fontFamily: '$fontRegular',
    textAlign: 'center',
    opacity: 1,
    marginLeft: width(1),
    color: '$textColor',
    backgroundColor: 'transparent'
  },
  androidMessageStyle: {
    opacity: 1,
    marginLeft: width(1),
    fontWeight: 'normal',
    color: 'black',
    backgroundColor: 'transparent'
  },
  viewContainer: {
    position: 'absolute',
    height: height(100),
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
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 1,
    height: height(33),
    width: width(80),
    borderRadius: 10
  },
  textContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: height(17),
    width: width(100),
    backgroundColor: 'white'
  },
  containerStyle: {
    flexDirection: 'row'
  }
})
