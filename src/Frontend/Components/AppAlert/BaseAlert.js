import { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { height } from '@/globalStyles'
/**
 * NAME: DropdownAlert message
 * CREATOR: Khiem
 * Show alert message
 */
Animatable.initializeRegistryWithDefinitions({
  animAlertActive: {
    from: {
      top: -height(80)
    },
    to: {
      top: height(40)
    }
  },
  animAlertDeactive: {
    from: {
      top: height(40)
    },
    to: {
      top: -height(80)
    }
  },
  animPushNotifyActive: {
    from: {
      top: -height(80)
    },
    to: {
      top: height(5)
    }
  },
  animPushNotifyDeactive: {
    from: {
      top: height(5)
    },
    to: {
      top: -height(80)
    }
  }
})
export default class BaseAlert extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: false,
      message: '',
      isOpen: false,
      isOut: false
    }
  }

  alertWithType (message, type) {
    // Check type of message
    if (typeof message !== 'string') {
      message = message.toString()
    }
    // Open alert
    if (this.state.isOpen === false) {
      this.setState({ type, message, isOpen: true })
    }
  }

  deActiveAlert (isPushNotify = false) {
    var self = this
    setTimeout(() => {
      isPushNotify
        ? self.refs.pushNotify && self.refs.pushNotify.animPushNotifyDeactive(800)
        : self.refs.viewAlert && self.refs.viewAlert.animAlertDeactive(800)
      setTimeout(() => {
        isPushNotify
          ? self.refs.pushNotify && self.setState({ isOpen: false })
          : self.refs.viewAlert && self.setState({ isOpen: false })
      }, __DEV__ ? 2000 : 600)
    }, isPushNotify ? 3000 : 2000)
  }
}
