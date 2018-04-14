import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  headerStyle: {
    position: 'absolute',
    opacity: 0
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '$main',
    alignItems: 'center',
    justifyContent: 'center'
  },
  spkSpinner: {
    color: 'white',
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
