import { History } from './base'

function ensureSlash() {
  if (window.location.hash) {
    return
  }
  window.location.hash = '/'
}

function getHash() {
  return window.location.hash.slice(1)
}

class HashHistory extends History {
  constructor(router) {
    super(router)
    this.router = router

    ensureSlash()
  }
  getCurrentLocation() {
    return getHash()
  }
  push(location) {
    this.transitionTo(location, () => {
      window.location.hash = location
    })
  }
  setupListener() {
    window.addEventListener('hashchange', () => {
      this.transitionTo(getHash())
    })
  }
}

export default HashHistory
