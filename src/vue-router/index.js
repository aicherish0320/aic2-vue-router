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
        this.history = new HashHistory(this)
        break
      case 'history':
        this.history = new BrowserHistory(this)
        break
      default:
        break
    }
  }

  init(app) {
    const history = this.history

    const setupHashListener = () => {
      history.setupListener()
    }
    history.transitionTo(history.getCurrentLocation(), setupHashListener)
  }
}

VueRouter.install = install

export default VueRouter
