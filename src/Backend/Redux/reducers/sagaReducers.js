import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

export const exchangeRate = createReducer(init.exRateInit, {
  [key.SET_SAGA_EXCHANGE] (state, action) {
    return action.payload
  }
})
