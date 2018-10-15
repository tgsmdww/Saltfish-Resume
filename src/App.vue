<template lang="pug">
#app
  the-head-nav
  #nav
    router-link(to="/") Home
    |  |#{' '}
    router-link(to="/about") About
  router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeadNav from "@/components/TheHeadNav.vue";

@Component({
  components: {
    TheHeadNav,
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
