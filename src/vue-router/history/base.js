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

function runQueue(queue, iterator, cb) {
  function step(index) {
    if (index >= queue.length) return cb()

    const hook = queue[index]
    iterator(hook, () => {
      step(index + 1)
    })
  }

  step(0)
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

    // 在更新之前先调用注册好的导航守卫
    const queue = [].concat(this.router.beforeHooks)

    const iterator = (hook, next) => {
      hook(this.current, route, () => {
        next()
      })
    }
    runQueue(queue, iterator, () => {
      this.updateRoute(route)

      onComplete && onComplete()
    })
  }
  updateRoute(route) {
    this.current = route
    this.cb && this.cb(route)
  }
  listen(cb) {
    this.cb = cb
  }
}
