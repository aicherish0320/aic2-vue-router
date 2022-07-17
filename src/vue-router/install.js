export let _Vue

export default function install(Vue, install) {
  _Vue = Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this
        this._router = this.$options.router

        this._router.init(this)
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
    }
  })
}
