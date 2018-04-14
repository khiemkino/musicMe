
import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  tab: {
    width: width(25),
    height: height(7),
    backgroundColor: '$main',
    justifyContent: 'center',
    alignItems: 'center'

  },

  tabs: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#111213',
    width: width(100),
    height: height(7),
    justifyContent: 'space-between'
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  },
  imageContainer: {
    height: width(5),
    width: width(5),
    marginBottom: width(1),
    resizeMode: 'contain'
  },
  imageContainerBig: {
    height: width(5),
    width: width(7),
    marginBottom: width(1),
    resizeMode: 'contain'
  },
  txtStyle: {
    textAlign: 'center',
    color: '$black'
  },
  // Modal Style
  mdAddMoreToken: {
    height: height(90),
    width: width(100),
    backgroundColor: 'white'
  },
  modal: {
    width: width(90),
    height: height(60),
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  grabTipModal: {
    paddingVertical: height(3),
    paddingHorizontal: width(7),
    marginHorizontal: width(5),
    width: width(90),
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  badgeContainer: {
    backgroundColor: '#FF081F',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: width(4.5),
    width: width(4.5),
    borderRadius: width(2.25),
    right: width(4.3),
    top: height(1)
  },
  txtGrabNoti: {
    color: 'black',
    fontWeight: '400',
    textAlign: 'center'
  },
  imgGrabNoti: {
    height: height(7.5),
    width: width(40),
    resizeMode: 'contain',
    marginBottom: height(1)
  }
})
export default styles
