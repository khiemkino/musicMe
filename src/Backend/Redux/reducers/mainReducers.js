import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

export const internetData = createReducer(init.internetInit, {
  [key.SET_INTERNET] (state, action) {
    return action.payload
  }
})
