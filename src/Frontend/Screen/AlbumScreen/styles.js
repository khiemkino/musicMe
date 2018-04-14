import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height(5)
  },
  imgAlbum: {
    height: height(30),
    width: width(70)
  },
  songShadowActive: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  loadingContainer: {
    height: height(70),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  albumContainerActive: {
    height: height(40),
    width: '100%',
    paddingTop: height(10)
  },
  albumContainer: {
    opacity: 0.7,
    height: height(40),
    width: '100%',
    paddingTop: height(10)
  },
  imgLoading: {
    height: height(30),
    width: width(50),
    resizeMode: 'contain'
  },
  textHeader: {
    fontFamily: '$fontRegular',
    fontSize: width(6)
  },
  textTitleSong: {
    fontFamily: '$fontRegular',
    fontSize: width(4)
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: width(90),
    alignSelf: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTime: {
    fontSize: width(4),
    color: '#6B696A',
    fontFamily: '$fontBold'
  },
  playContainer: {
    width: width(95),
    borderRadius: width(1),
    height: height(0.9),
    backgroundColor: '$black',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  playActiveContainer: {
    borderRadius: width(1),
    height: height(0.9),
    backgroundColor: '$main',
    justifyContent: 'center'
  },
  dotContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: '$main',
    height: height(3),
    width: height(3),
    borderRadius: height(1.5)
  },
  footerPage: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: height(3),
    opacity: 0.5,
    width: width(100)
  },
  footerPageActive: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    opacity: 1,
    paddingVertical: height(3),
    width: width(100)
  },
  footerContainer: {
    marginTop: height(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(80)
  },
  btnPlayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width(40)
  },
  btnPlay: {
    borderWidth: 1.5,
    borderColor: '$black',
    height: height(9),
    width: height(9),
    borderRadius: height(4.5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    width: width(90),
    paddingBottom: height(2)
  },
  imgFooter: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: height(6),
    width: width(70),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0
  },
  textImgFooter: {
    fontSize: width(4),
    color: 'white',
    fontFamily: '$fontRegular'
  },
  textSingerFooter: {
    color: '#CEC4C5',
    fontSize: width(3.5),
    fontFamily: '$fontRegular'
  },
  songRowContainer: {
    paddingVertical: height(1.5),
    width: width(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1
  },
  songRowContainerPlay: {
    paddingRight: width(2),
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: height(1.5),
    width: width(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#DFDFDF',
    borderBottomWidth: 1
  },
  textSongTitleActive: {
    fontSize: width(4),
    color: '$main',
    fontFamily: '$fontBold'
  },
  textSongSingerActive: {
    fontSize: width(3.5),
    color: '#D8D856',
    fontFamily: '$fontRegular'
  },
  textSongTitle: {
    fontSize: width(4),
    color: '$black',
    fontFamily: '$fontBold'
  },
  textSongSinger: {
    fontSize: width(3.5),
    color: '#B0ACAC',
    fontFamily: '$fontRegular'
  },
  textSongIndex: {
    fontSize: width(3.5),
    color: '$black',
    fontFamily: '$fontRegular',
    width: width(10)
  },
  indexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  songListContainerActive: {
    opacity: 1,
    height: height(25)
  },
  songListContainer: {
    opacity: 0.5,
    height: height(25)
  },
  spkSpinner: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 5,
    color: 'white',
    top: height(20)
  },
  songLoading: {
    height: height(5),
    width: width(7),
    marginRight: width(3),
    resizeMode: 'contain'
  },
  activeOpacity: {
    opacity: 1
  },
  inActiveOpacity: {
    opacity: 0.5
  }
})

export default styles
