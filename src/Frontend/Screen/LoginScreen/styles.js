import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  headerStyle: {
    position: 'absolute',
    opacity: 0
  },
  btnStyle: {
    resizeMode: 'contain',
    height: height(30),
    width: width(60)
  },
  welcomeStyle: {
    fontSize: width(10),
    fontFamily: '$fontBold',
    fontWeight: 'bold'
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spkSpinner: {
    marginTop: height(5),
    color: '$black',
    alignSelf: 'center'
  },
  logoStyle: {
    resizeMode: 'contain',
    height: height(30),
    width: width(50)
  },
  loadingImage: {
    height: height(20),
    width: width(40),
    resizeMode: 'contain'
  },
  socialLogo: {
    resizeMode: 'contain',
    height: height(6),
    width: width(85)
  }
})

export default styles
