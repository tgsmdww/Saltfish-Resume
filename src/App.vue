<template lang="pug">
#app
  go-top
  svg-icon
  the-head-nav
  .maincontainer
    router-view.router
    router-view.portfolio-router(name="portfolio")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeadNav from "@/components/TheHeadNav.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import GoTop from "@/components/GoTop.vue";
import { setTimeout } from "timers";

@Component({
  components: {
    TheHeadNav,
    SvgIcon,
    GoTop
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">

@keyframes globalFadeIn
  from
    transform translateY(20%)
    opacity 0

  to
    transform translateY(0)
    opacity 1

.global-fade-in
  visibility hidden


@font-face
  font-family ProximaNova
  src url('../public/fonts/ProximaNova-Regular.otf') format('opentype')
@font-face
  font-family ProximaNova
  src url('../public/fonts/ProximaNova-Bold.otf') format('opentype')
  font-weight bold
@font-face
  font-family ProximaNova
  src url('../public/fonts/ProximaNova-RegItalic.otf') format('opentype')
  font-style italic
@font-face
  font-family ProximaNova
  src url('../public/fonts/ProximaNova-SemiboldItalic.otf') format('opentype')
  font-weight bold
  font-style italic

html
  overflow-y scroll

  body
    margin 0
    font-family ProximaNova, Roboto, \
      system, -apple-system, BlinkMacSystemFont, \
      "Helvetica Neue", Helvetica, \
      "PingFang SC", "Hiragino Sans GB", \
      "Microsoft YaHei"
    background-image url('./assets/background.svg')
    background-repeat no-repeat
    background-size 100%
    background-color #102131
    min-height 100vh

    .maincontainer
      padding-bottom 1px
    .maincontainer >.router
      margin 20px 10%
      max-width 1400px
      @media screen and (max-width :420px)
        margin 0 5%

#app
  margin 0 auto
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

  @media screen and (max-width :420px)
    margin 0 auto
    width 100%
    height auto
</style>
