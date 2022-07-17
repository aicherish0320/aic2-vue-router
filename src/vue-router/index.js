import install from './install'
import createMatcher from './create-matcher'
import BrowserHistory from './history/history'
import HashHistory from './history/hash'

class VueRouter {
  constructor(options) {
    this.matcher = createMatcher(options.routes || [])

    const mode = options.mode || 'hash'
    switch (mode) {
      case 'hash':
        this.history = new HashHistory()
        break
      case 'history':
        this.history = new BrowserHistory()
        break
      default:
        break
    }

    console.log(this.history)
  }

  init(app) {}
}

VueRouter.install = install

export default VueRouter
