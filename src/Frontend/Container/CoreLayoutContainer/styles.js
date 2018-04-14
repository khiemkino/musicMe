import { Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const ISIOS = Platform.OS === 'ios'
const heightNavBar = height(ISIOS ? 10 : 8.5)
const topNavBarIOS = height(ISIOS ? 3 : 0)
const navBarFit = height(ISIOS ? 5 : 2)

const styles = EStyleSheet.create({
  paddingHeader: {
    paddingTop: heightNavBar - height(1)
  },
  container: {
    top: 0,
    position: 'absolute',
    elevation: 10,
    height: heightNavBar,
    width: width(90),
    zIndex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  coreStyle: {
    paddingTop: topNavBarIOS,
    height: heightNavBar,
    width: width(90),
    paddingHorizontal: width(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtTitleContainer: {
    width: width(70),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  txtTitleCustom: {
    color: '$textColor',
    fontFamily: '$fontBold',
    textAlign: 'center',
    fontSize: width(4.5),
    left: width(6.5)
  },
  txtTitle: {
    // Font title style
    color: '$textColor',
    fontFamily: '$fontBold',
    textAlign: 'center',
    fontSize: width(4.5)
  },
  titleRightContainer: {
    width: width(57),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconHeaderLeftContainer: {
    width: width(15),
    position: 'absolute',
    height: heightNavBar - topNavBarIOS,
    top: topNavBarIOS,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconHeaderLeft: {
    width: width(5),
    justifyContent: 'center'
  },
  iconHeaderLeftRightView: {
    right: width(2),
    width: width(12),
    justifyContent: 'center'
  },
  iconHeaderRight: {
    width: width(18),
    marginRight: -width(3),
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  btnLeft: {
    top: navBarFit - height(0.5),
    width: width(15),
    left: -width(5),
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1
  },
  viewTitleFit: {
    width: width(70),
    top: navBarFit,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: -1
  },
  viewRightFit: {
    width: width(25),
    alignItems: 'flex-end',
    left: width(70)
  },
  viewShadow: {
    width: width(1),
    opacity: 0.4,
    left: width(70)
  }

})
export default styles
