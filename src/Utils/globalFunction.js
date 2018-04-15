// import io from 'socket.io-client'

// var socket
export const keyExtractor = (item, index) => {
  return index.toString()
}

export const getMinutes = (second) => {
  var minutes = Math.floor(second / 60)
  var seconds = second - minutes * 60

  return minutes + ':' + (seconds.toFixed().toString().length === 1 ? '0' + seconds.toFixed() : seconds.toFixed())
}

// export const updateSongServer = (dispatch) => {
//   socket = io.connect('http://localhost:3000/', {
//     transports: ['websocket']
//   })

//   socket.on('connect', () => console.log('test'))

//   socket.on('event', async (event) => {
//     console.log(event)
//   })
// }
