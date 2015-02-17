import {EventEmitter} from 'events'
import throttle from 'lodash.throttle'
import singleton from 'pragma-singleton'

class BrowserSize extends EventEmitter {

  constructor() {
    window.addEventListener('resize', throttle( () => {
      this.computeSize()
      this.emit('resize')
    }, 200))

    this.computeSize()
  }

  computeSize() {
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
  }

}

export default singleton(BrowserSize)
