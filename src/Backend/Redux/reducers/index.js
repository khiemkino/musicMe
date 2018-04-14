import * as globalReducers from './globalReducers'
import * as mainReducers from './mainReducers'
import * as sagaReducers from './sagaReducers'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  ...globalReducers,
  ...sagaReducers,
  ...mainReducers
})

export default rootReducer
