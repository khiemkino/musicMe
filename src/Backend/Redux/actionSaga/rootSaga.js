import { takeLatest } from 'redux-saga/effects'
import key from '../lib/constants'
import { fetchExchangeRate } from './sagaFetchActions'

export default function * rootSaga () {
  yield takeLatest(key.GET_EXCHANGE, fetchExchangeRate)
}
