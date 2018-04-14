import key from '../lib/constants'

export function getExchangeRate (rate) {
  return {
    type: key.GET_EXCHANGE,
    rate
  }
}

export function setExchangeRate (exchangeRate) {
  return {
    type: key.SET_SAGA_EXCHANGE,
    payload: exchangeRate
  }
}
