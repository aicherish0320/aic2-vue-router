export default {
  name: 'RouterView',
  functional: true,
  render(h, { parent, data }) {
    const route = parent.$route

    let depth = 0
    data.routerView = true
    // $vnode 代表的是占位符 vnode
    // _vnode 组件内部渲染的虚拟节点
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++
      }
      parent = parent.$parent
    }

    const record = route.matched[depth]
    if (!record) {
      return h()
    }

    return h(record.component, data)
  }
}
