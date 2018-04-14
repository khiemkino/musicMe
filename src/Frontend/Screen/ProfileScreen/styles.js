import EStyleSheet from 'react-native-extended-stylesheet'
import { width, height } from '@/globalStyles'

const styles = EStyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: height(5),
    width: width(90),
    marginHorizontal: width(5)
  },
  backRoute: {
    width: width(8),
    height: height(5)
  },
  txtTitle: {
    fontSize: width(6),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  backgroundStyle: {
    width: width(100),
    height: height(100),
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
    height: height(24),
    width: height(24),
    borderRadius: height(12),
    backgroundColor: '$main',
    alignItems: 'center',
    justifyContent: 'center'
  },

  circle2: {
    height: height(22),
    width: height(22),
    borderRadius: height(11),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle3: {
    height: height(20),
    width: height(20),
    borderRadius: height(10),
    backgroundColor: '#F4F3F3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgProfile: {
    zIndex: -1,
    height: height(18),
    width: height(18),
    borderRadius: height(9)
  },
  profileContainer: {
    paddingHorizontal: width(5),
    marginTop: height(12),
    flexDirection: 'row',
    alignItems: 'center'
  },
  otherInfo: {
    marginLeft: width(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textName: {
    fontFamily: '$fontBold',
    fontSize: width(4.2),
    color: '$black',
    marginBottom: height(1)
  },
  textSong: {
    fontFamily: '$fontRegular',
    fontSize: width(4.2),
    color: '$black',
    marginBottom: height(1)
  },
  followContainer: {
    backgroundColor: 'white',
    height: height(60),
    paddingHorizontal: width(2),
    marginTop: height(4)
  },
  followImage: {
    height: width(15),
    width: width(15),
    borderRadius: width(7.5),
    resizeMode: 'contain'
  },
  textNameFollow: {
    fontSize: width(3),
    marginTop: height(1),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  followSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(2),
    height: height(15),
    marginRight: width(2)
  },
  textTitle: {
    marginTop: height(1),
    marginLeft: width(2),
    fontSize: width(4.5),
    fontFamily: '$fontRegular',
    color: '$black'
  },
  grayLine: {
    height: 1,
    position: 'absolute',
    backgroundColor: '#BEBEBE',
    width: width(90),
    top: height(4.5),
    alignSelf: 'center'
  },
  songContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(2),
    height: height(20),
    marginRight: width(2)
  },
  imgSong: {
    height: height(15),
    width: height(15),
    borderRadius: height(7.5)
  }
})

export default styles
