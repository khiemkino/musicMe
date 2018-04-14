import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height(15)
  },
  backgroundStyle: {
    width: width(100),
    height: height(100),
    position: 'absolute',
    zIndex: -1,
    opacity: 0.5
  },
  songImage: {
    height: width(90),
    width: width(90),
    borderRadius: width(45),
    borderWidth: 2,
    borderColor: '$main'
  },
  songShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  textNameSong: {
    fontSize: width(7),
    fontFamily: '$fontRegular',
    marginVertical: height(1),
    color: '#3A3D3C'
  },
  textNameAlbum: {
    fontSize: width(4),
    fontFamily: '$fontRegular',
    color: '#746D6E'
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
  footerPage: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    paddingVertical: height(3),
    bottom: 0
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    top: height(4),
    width: width(90)
  },
  likeContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 2
  }

})

export default styles
