import io from 'socket.io-client'

var socket
export const keyExtractor = (item, index) => {
  return index.toString()
}

export const getMinutes = (second) => {
  var minutes = Math.floor(second / 60)
  var seconds = second - minutes * 60

  return minutes + ':' + (seconds.toFixed().toString().length === 1 ? '0' + seconds.toFixed() : seconds.toFixed())
}

// export const updateSongServer = (dispatch) => {
//   // Create WebSocket connection.
//   const ws = new WebSocket('wss://stream.binance.com:9443/ws/engbtc@aggTrade')
//   // Connection opened
//   ws.addEventListener('open', function (event) {
//     console.log(event)
//   })
//   // Listen for messages
//   ws.addEventListener('message', function (newEvent) {
//     var wsEvent = JSON.parse(newEvent.data)
//     console.log(wsEvent)
//     dispatch(getExchangeRate(wsEvent))
//   })
// }
