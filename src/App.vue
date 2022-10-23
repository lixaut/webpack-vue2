
<template>
  <div>
    <h1>vue demo</h1>
    <Home></Home>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
  }
}
</script>

<style lang="scss" scoped>
</style>