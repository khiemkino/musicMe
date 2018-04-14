import { statusName } from '@/globalConstants'
import { AppColor } from '@/globalStyles'
import moment from 'moment'
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
