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
  match(location) {
    return this.matcher.match(location)
  }
  push(to) {
    this.history.push(to)
  }
  go() {}
  init(app) {
    const history = this.history

    const setupHashListener = () => {
      history.setupListener()
    }
    history.transitionTo(history.getCurrentLocation(), setupHashListener)

    history.listen((route) => {
      app._route = route
    })
  }
}

VueRouter.install = install

export default VueRouter
