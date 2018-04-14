import EStyleSheet from 'react-native-extended-stylesheet'
import { height, width } from '@/globalStyles'

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  borderErrContainer: {
    borderColor: '$main'
  },
  borderSuccessContainer: {
    borderColor: '$green'
  },
  iconStyle: {
    width: width(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeHolderStyle: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    flexDirection: 'row'
  },
  placeHolderHide: {
    opacity: 0
  },
  placeHolderShow: {
    opacity: 1
  },
  labelContainer: {
    marginRight: width(2),
    alignItems: 'center'
  },
  // App Input Search
  rowContainer: {
    width: '100%',
    height: height(5.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width(3)
  },
  searchLabelContainer: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: width(5)
  },
  iconContainer: {
    height: height(8),
    width: width(10),
    alignItems: 'center',
    justifyContent: 'center',
    right: width(2.5)
  },
  // Text Style
  txtPlaceHolderAdmin: {
    position: 'absolute',
    color: 'rgb(227, 227, 227)',
    fontSize: width(3.5),
    fontFamily: '$fontRegular',
    left: width(10)
  },
  txtPlaceHolder: {
    position: 'absolute',
    color: 'rgb(105, 105, 105)',
    fontSize: width(3.5),
    fontFamily: '$fontRegular',
    left: width(10)
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: width(2),
    fontSize: width(3.5),
    fontFamily: '$fontRegular'
  },
  txtErr: {
    fontFamily: '$fontRegular',
    fontSize: width(2),
    top: height(5.2),
    alignSelf: 'center',
    position: 'absolute',
    opacity: 1,
    color: 'red'
  },
  txtNoErr: {
    fontFamily: '$fontRegular',
    fontSize: 0,
    top: height(7),
    position: 'absolute',
    opacity: 0,
    marginHorizontal: width(2),
    color: 'red'
  }
})

export default styles
