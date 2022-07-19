<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/a">AboutA</router-link> |
    <router-link to="/about/b">AboutB</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'AboutView'
}
</script>
