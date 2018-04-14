import { put } from 'redux-saga/effects'
import * as sagaAction from './sagaActions'
import init from '../lib/initState'

export const fetchExchangeRate = function * (action) {
  try {
    let rate = action.rate

    yield put(sagaAction.setExchangeRate(rate))
  } catch (error) {
    console.log(error)
    yield put(sagaAction.setExchangeRate(init.exRateInit))
  }
}
