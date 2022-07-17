export function createRoute(record, location) {
  const ret = []

  if (record) {
    while (record) {
      ret.unshift(record)
      record = record.parent
    }
  }

  return {
    ...location,
    matched: ret
  }
}

export class History {
  constructor(router) {
    this.router = router

    this.current = createRoute(null, {
      path: '/'
    })
  }
  transitionTo(location, onComplete) {
    const route = this.router.match(location)
    // 防止重复跳转
    if (
      location === this.current.path &&
      route.matched.length === this.current.matched.length
    ) {
      return
    }
    this.updateRoute(route)

    onComplete && onComplete()
  }
  updateRoute(route) {
    this.current = route
    this.cb && this.cb(route)
  }
  listen(cb) {
    this.cb = cb
  }
}
