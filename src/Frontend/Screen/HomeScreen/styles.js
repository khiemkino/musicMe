import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  findContainer: {
    height: height(10),
    width: width(100),
    backgroundColor: '$black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textFindMusic: {
    fontSize: width(5),
    fontFamily: '$fontRegular',
    color: 'white'
  },
  container: {
    marginTop: height(5)
  },
  imgLoading: {
    height: height(30),
    width: width(50),
    resizeMode: 'contain'
  },
  headerContainer: {
    flexDirection: 'row',
    paddingLeft: width(5),
    width: width(88),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cameraContainer: {
    width: width(100),
    height: height(85)
  },
  qrHeader: {
    height: height(15),
    width: width(30),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -height(8)
  },
  inputSearch: {
    width: width(70),
    height: height(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C6C6C6',
    backgroundColor: 'white',
    borderRadius: width(5)
  },
  songContainer: {
    height: height(26),
    width: width(34),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSongName: {
    paddingVertical: height(1),
    fontFamily: '$fontRegular',
    fontSize: width(4),
    color: 'black'
  },
  imgSong: {
    height: height(20),
    width: width(30),
    borderRadius: width(3)
  },
  textTitle: {
    fontFamily: '$fontBold',
    fontSize: width(5),
    color: 'black',
    marginVertical: height(1)
  },
  playListContainer: {
    paddingHorizontal: width(3),
    alignSelf: 'center',
    marginTop: height(4),
    marginBottom: height(23)
  },
  loadingContainer: {
    height: height(70),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
})

export default styles
