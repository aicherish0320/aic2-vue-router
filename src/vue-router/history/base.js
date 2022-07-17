export class History {
  constructor(router) {
    this.router = router
  }
  transitionTo(location, onComplete) {
    console.log('location >>> ', location)

    onComplete && onComplete()
  }
}
