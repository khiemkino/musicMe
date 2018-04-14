
const serverUrl = 'https://musicmeserver.herokuapp.com/'
export default class ZignalService {
  static async getSong () {
    try {
      var response = await fetch(serverUrl + 'song', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async getAlbum () {
    try {
      var response = await fetch(serverUrl + 'album', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async updateSong (mySong, id) {
    try {
      var response = await fetch(serverUrl + 'updateSong', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          mySong
        })
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data.data
    } catch (error) {
      return undefined
    }
  }

  static async createSignal (name, target, exchange, tipTarget, type) {
    try {
      var response = await fetch(serverUrl + 'signal', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          numFollow: '123',
          name,
          target,
          exchange,
          tipTarget,
          status: 'Opening',
          type
        })
      })
      let responJson = await response.json()
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async getNotification () {
    try {
      var response = await fetch(serverUrl + 'notification', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async getAnalysis () {
    try {
      var response = await fetch(serverUrl + 'analysis', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let responJson = await response.json()
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async createAnalysis (detail, image) {
    try {
      var response = await fetch(serverUrl + 'analysis', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          detail,
          image
        })
      })
      let responJson = await response.json()
      return responJson.data
    } catch (error) {
      return undefined
    }
  }

  static async registerUser (id, username, email, link, image) {
    try {
      var response = await fetch(serverUrl + 'account', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          username,
          email,
          link,
          image
        })
      })
      let responJson = await response.json()
      console.log(responJson)
      return responJson.data.data
    } catch (error) {
      return undefined
    }
  }
}
