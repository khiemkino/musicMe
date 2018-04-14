import { statusName } from '@/globalConstants'
import { AppColor } from '@/globalStyles'
// import io from 'socket.io-client'
import moment from 'moment'
import { getExchangeRate } from '#/Redux/actionSaga/sagaActions'
import I18n from 'react-native-i18n'

export const keyExtractor = (item, index) => {
  return index.toString()
}

export const subBeforeAfter = (string) => {
  let strSplit = string.split(',')
  return strSplit
}

export const getColorSignal = (status) => {
  const nameColor = status === statusName.opening
    ? AppColor.main
    : status === statusName.failed ? AppColor.gray : AppColor.green
  return nameColor
}

export const convertTimestampToDate = (strTimestamp) => {
  const date = new Date(strTimestamp)
  let strTime = moment(date).format('YYYY/MM/DD')
  return strTime
}

export const convertTimestampToDateMonth = (strTimestamp) => {
  const date = new Date(strTimestamp)
  let strTime = moment(date).format('MMMM D')
  return strTime
}

export const convertTimestampToDateTime = (strTimestamp) => {
  const date = new Date(strTimestamp)
  let strTime = moment(date).format('YYYY/MM/DD hh:mm')
  return strTime
}

export const formatNumber = (strNumber, isFiatMoney) => {
  let stringNumber = Number(strNumber).toFixed(8).replace(/\.?0+$/, '')
  let dotsCount = countDots(stringNumber, '\\.')
  let precision = null
  if (dotsCount === 1) {
    let decimalCount = stringNumber.length - stringNumber.indexOf('.') - 1
    decimalCount = decimalCount <= 2 ? 2 : decimalCount
    precision = decimalCount > 8 ? 8 : decimalCount
  } else {
    precision = 2
  }
  let value = I18n.toNumber(stringNumber,
    { separator: '.', precision: isFiatMoney ? 2 : precision, delimiter: ',' })
  return value
}

export const countDots = (strString, strLetter) => {
  return (strString.match(RegExp(strLetter, 'g')) || []).length
}

export const showAlert = (THIS, strMessage, isError) => {
  THIS.showAlert(strMessage, isError)
}

export const calculatePercentIncrease = (calculateNum, compareNum) => {
  return formatNumber(((compareNum - calculateNum) / (calculateNum)) * 100, true) + '%'
}

export const concatString = (array) => {
  let nameSignal = ''
  array.map((item, index) => {
    nameSignal += item.name
    if (index !== (array.length - 1)) {
      nameSignal += '/'
    }
  })
  return nameSignal
}

export const concatStringAdd = (array) => {
  let nameSignal = ''
  array.map((item, index) => {
    nameSignal += item
    if (index !== (array.length - 1)) {
      nameSignal += ', '
    }
  })
  return nameSignal
}

export const updateExchangeRate = (dispatch) => {
  // Create WebSocket connection.
  const ws = new WebSocket('wss://stream.binance.com:9443/ws/engbtc@aggTrade')
  // Connection opened
  ws.addEventListener('open', function (event) {
    console.log(event)
  })
  // Listen for messages
  ws.addEventListener('message', function (newEvent) {
    var wsEvent = JSON.parse(newEvent.data)
    console.log(wsEvent)
    dispatch(getExchangeRate(wsEvent))
  })
  // var socket = io.connect('http://localhost:3000/', { transports: ['websocket'] })

  // socket.on('connect', (event) => console.log(event))
  // socket.on('error', (event) => console.log(event))

  // socket.emit('add user', 'yen')
  // socket.emit('new message', 'love123')
  // socket.emit('binance')

  // socket.on('new test', function (data) {
  //   console.log(data)
  // })

  // socket.on('join', (event) => {
  //   console.log(event)
  // })
  // socket.on('binance', function (data) {
  //   console.log(data)
  // })
}
