import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  menuContainer: {
    height: height(100),
    width: width(70),
    paddingTop: height(4),
    backgroundColor: 'white',
    alignItems: 'center'
  },
  backgroundStyle: {
    width: width(70),
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  },
  circle1: {
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    height: height(27),
    width: height(27),
    borderRadius: height(13.5),
    backgroundColor: '$main',
    alignItems: 'center',
    justifyContent: 'center'
  },

  circle2: {
    height: height(25),
    width: height(25),
    borderRadius: height(12.5),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle3: {
    height: height(23),
    width: height(23),
    borderRadius: height(11.5),
    backgroundColor: '#F4F3F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgProfile: {
    zIndex: -1,
    height: height(20),
    width: height(20),
    borderRadius: height(10)
  },
  txtName: {
    fontSize: width(4.5),
    marginVertical: height(3),
    color: '$black',
    fontFamily: '$fontRegular'
  },
  menuFlat: {
    height: height(43),
    marginBottom: height(2)
  },
  subMenuContainer: {
    height: height(9),
    width: width(70),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(5),
    borderBottomColor: '#AFAFAF',
    borderBottomWidth: 1
  },
  firstIcon: {
    width: width(7),
    height: height(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtSubMenu: {
    fontSize: width(4.5),
    marginVertical: height(2),
    color: '$black',
    marginLeft: width(5),
    fontFamily: '$fontRegular'
  }
})

export default styles
