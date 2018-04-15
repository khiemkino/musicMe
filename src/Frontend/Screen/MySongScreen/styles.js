import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    paddingTop: height(15)
  },
  backgroundStyle: {
    width: width(100),
    height: height(100),
    position: 'absolute',
    zIndex: -1
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: height(5),
    width: width(90),
    marginHorizontal: width(5)
  },
  songContainer: {
    backgroundColor: 'white',
    width: width(90),
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    marginHorizontal: width(5),
    marginBottom: height(1),
    paddingRight: width(3)
  },
  imgSong: {
    width: width(30),
    height: height(15),
    marginRight: width(5)
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSongName: {
    fontSize: width(4),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  textSongSinger: {
    fontSize: width(4),
    fontFamily: '$fontRegular',
    color: '#696868'
  },
  txtTitle: {
    fontSize: width(6),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  imgNoresult: {
    height: height(30),
    width: width(50),
    resizeMode: 'contain'
  },
  playIcon: {
    height: height(10),
    width: width(30),
    position: 'absolute',
    resizeMode: 'contain',
    opacity: 0.8,
    top: height(4),
    left: width(1)
  },
  noresultContainer: {
    height: height(50),
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  spkSpinner: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 5,
    color: '$black',
    top: height(40)
  },
  songListContainer: {
    height: height(62),
    opacity: 0.7
  },
  songListContainerActive: {
    height: height(62)
  },
  footerPage: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: height(3),
    opacity: 0.7
  },
  footerPageActive: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: height(3)
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
  textTime: {
    fontSize: width(4),
    color: '#6B696A',
    fontFamily: '$fontBold'
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
    width: width(90),
    paddingBottom: height(2)
  },
  modal: {
    height: height(40),
    width: width(100),
    backgroundColor: 'white'
  },
  playListContainer: {
    height: height(40),
    width: '100%',
    backgroundColor: 'white',
    padding: height(2)
  },
  subPlayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height(2)
  },
  textSub: {
    fontSize: width(4),
    fontFamily: '$fontRegular',
    marginLeft: width(5),
    color: '$black'
  },
  addSong: {
    height: height(12),
    width: width(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInfoTitle: {
    marginTop: height(2),
    fontFamily: '$fontBold',
    fontSize: width(4),
    textAlign: 'center',
    color: '$black'
  },
  textSubTitle: {
    fontFamily: '$fontRegular',
    fontSize: width(4),
    color: '#6C6969',
    width: width(15)
  },
  activeOpacity: {
    opacity: 1
  },
  inActiveOpacity: {
    opacity: 0.5
  },
  backRoute: {
    width: width(8),
    height: height(5)
  },
  imgInfo: {
    width: width(50),
    height: height(20),
    marginRight: width(2.5)
  },
  rowInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height(2)
  },
  grayLine: {
    height: height(20),
    width: 1,
    backgroundColor: '#CBCBCB',
    position: 'absolute',
    left: width(13),
    bottom: -height(5.5)
  },
  grayFooterLine: {
    height: 1,
    backgroundColor: '#CBCBCB',
    width: width(80)
  },
  footerSub: {
    marginTop: height(5),
    height: height(4),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  }
})

export default styles
