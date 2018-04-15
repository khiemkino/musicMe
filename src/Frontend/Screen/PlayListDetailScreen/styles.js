import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#FDFFD8',
    paddingTop: height(2),
    height: height(10),
    paddingHorizontal: width(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: height(2)
  },
  textHeader: {
    fontSize: width(5),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  textSongDuration: {
    fontSize: width(3),
    fontFamily: '$fontRegular',
    color: '$black',
    right: width(1.5)
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
  backIcon: {
    width: width(5),
    height: height(5)
  },
  songContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width(50),
    marginBottom: height(2)
  },
  imgSong: {
    height: height(18),
    width: height(18),
    borderRadius: height(9)
  },
  textSongName: {
    fontSize: width(4),
    fontFamily: '$fontRegular',
    color: '$black',
    marginTop: height(1)
  },
  textSongSinger: {
    fontSize: width(2.7),
    fontFamily: '$fontRegular',
    color: '#9C9595',
    marginTop: height(0.5)
  },
  shadowView: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  songlistContainer: {
    height: height(90),
    width: '100%',
    opacity: 0.7
  },
  songlistContainerActive: {
    height: height(90),
    width: '100%'
  },
  imgNoresult: {
    height: height(30),
    width: width(50),
    resizeMode: 'contain'
  },
  noresultContainer: {
    height: height(90),
    width: width(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  playFullContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  songplayContainer: {
    width: width(100),
    height: height(13),
    borderTopLeftRadius: width(15),
    borderBottomLeftRadius: width(15),
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingLeft: width(3),
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    left: width(15),
    flexDirection: 'row'
  },
  infoContainer: {
    marginLeft: width(2)
  },
  imgPlaySong: {
    height: height(11),
    width: height(11),
    borderRadius: height(5.5)
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width(20),
    marginLeft: width(4),
    marginRight: width(7)
  },
  modal: {
    height: height(18),
    backgroundColor: 'transparent'
  },
  activeOpacity: {
    opacity: 1
  },
  inActiveOpacity: {
    opacity: 0.5
  },
  playIcon: {
    height: height(10),
    width: width(30),
    position: 'absolute',
    resizeMode: 'contain',
    opacity: 0.8,
    top: height(4),
    left: width(1)
  }
})

export default styles
