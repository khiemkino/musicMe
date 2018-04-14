import {StyleSheet} from 'react-native'
import { width, height } from '@/globalStyles'

const styles = StyleSheet.create({
  internetContent: {
    top: height(45),
    height: height(10),
    width: width(80),
    borderRadius: 30,
    backgroundColor: '#4a4f54',
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  txtInternet: {
    opacity: 1,
    fontSize: width(3.5)
  }
})

export default styles
