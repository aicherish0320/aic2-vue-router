export default {
  name: 'RouterLink',
  props: {
    to: {
      type: String
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  methods: {
    handler(to) {
      this.$router.push(to)
    }
  },
  render() {
    const { tag, to } = this
    return (
      <tag onclick={this.handler.bind(this, to)}>{this.$slots.default}</tag>
    )
  }
}
