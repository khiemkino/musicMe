import store from 'react-native-simple-store'

export default function createReducer (initialState, handlers) {
  return function reducer (state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export const checkStore = async (data, KEYSTOREDATA) => {
  store.save(KEYSTOREDATA, data)
}

export const checkLocalStoreToRedux = async (storeRedux, keyStoreNew, action, initData) => {
  let data = await store.get(keyStoreNew)

  let typeOfInitData = typeof (initData)

  if (typeOfInitData === 'string' || typeOfInitData === 'number') {
    data && data !== initData && storeRedux.dispatch(action(data))
  } else if (typeOfInitData === 'boolean') {
    data === true && storeRedux.dispatch(action(data))
  } else if (typeOfInitData === 'object') {
    if (Array.isArray(initData)) {
      data === null
        ? storeRedux.dispatch(action(initData))
        : data.length > 0 && storeRedux.dispatch(action(data))
    } else {
      data !== null &&
        storeRedux.dispatch(action(data))
    }
  }
}
