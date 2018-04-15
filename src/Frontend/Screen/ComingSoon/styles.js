import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    paddingTop: height(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  commingSoonImage: {
    height: height(30),
    width: width(80),
    resizeMode: 'contain'
  },
  comingSoon: {
    fontSize: width(8)
  }
})
export default styles
