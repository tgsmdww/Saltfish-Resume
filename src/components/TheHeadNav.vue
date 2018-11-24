<template lang="pug">
.head-nav-root(
  @click="hiddenList"
)
  router-link.nav-homepage(to="/")
    img.logo(
      src="@/assets/Logo/logo_grey_long.png"
    )
    img.logo(
      class="-short"
      src="@/assets/Logo/logo_grey.png"
      )
  .mobileicon(@click.stop="toggleNav")
  ul.nav-list
    router-link.item(tag="li" to="/" exact) Home
    router-link.item(tag="li" to="/portfolio" exact) Portfolio
    router-link.item(tag="li" to="/profile") Profile
    router-link.item(tag="li" to="/contact") Contact

  transition(name="fade")
    ul.nav-mobile-list(
      v-show="toggle"
    )
      router-link.item(tag="li" to="/" exact) Home
      router-link.item(tag="li" to="/portfolio" exact) Portfolio
      router-link.item(tag="li" to="/profile") Profile
      router-link.item(tag="li" to="/contact") Contact
  .mobile-shade(
    v-show="toggle"
    @click="hiddenList"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TheHeadNav extends Vue {
  toggle: Boolean = false;

  hiddenList(): void {
    this.toggle = false;
  }

  toggleNav(): void {
    this.toggle = !this.toggle;
  }
}
</script>

<style lang="stylus" scoped>
$text-color = #8e8e8e
$text-color-hover= #ffffff

.fade-enter-active
.fade-leave-active
  transition all .1s ease

.fade-leave
.fade-enter-to
  height 200px

.fade-enter
.fade-leave-to
  height 0

.head-nav-root
  display flex
  justify-content space-between
  margin 0 auto
  margin-bottom 70px
  width 100%
  height 100px
  text-align center
  @media screen and (max-width : 645px)
    position relative
    margin-bottom 20px
    height 40px
    background-color #24292e

  >.nav-homepage
    margin-left 25px
    @media screen and (max-width : 645px)
      margin 0
      margin-left 5px
      width 50px
      height 40px

  >.nav-homepage >.logo
    height 100px
    cursor pointer
    @media screen and (max-width : 645px)
      display none

  >.nav-homepage >.logo.-short
    display none
    @media screen and (max-width : 645px)
      display block
      height 100%

  >.mobileicon
    display none
    @media screen and (max-width : 645px)
      display block
      margin-top 10px
      margin-right 20px
      border-top 12px double
      border-bottom 4px solid
      border-color #c5e5ff
      width 24px
      height 4px
      color #c5e5ff
      cursor pointer

  >.nav-list
    display flex
    justify-content center
    align-items center
    margin 0
    padding 0 50px
    width 350px
    height 90px
    @media screen and (max-width : 645px)
      display none

  >.nav-list >.item
    list-style none
    border-radius 5px
    padding 15px 20px
    font-weight bold
    letter-spacing 1px
    color $text-color
    cursor pointer
    transition box-shadow 0.6s
    &:hover
      color $text-color-hover
      box-shadow -7px 1px 10px rgba(0,0,0,0.15), -1px 7px 10px rgba(0,0,0,0.15), -7px 7px 10px rgba(0,0,0,0.15)

  >.nav-list >.router-link-active
    color $text-color-hover
    box-shadow -7px 1px 10px rgba(0,0,0,0.15), -1px 7px 10px rgba(0,0,0,0.15), -7px 7px 10px rgba(0,0,0,0.15)

  >.nav-mobile-list
    display none
    @media screen and (max-width : 645px)
      display block
      overflow hidden
      position absolute
      top 40px
      z-index 1
      margin 0
      padding 0
      width 100%
      background-color #24292e

  >.nav-mobile-list >.item
    list-style none
    margin 0 auto
    border-bottom 1px solid #274058
    padding 15px
    width 90%
    text-align left
    color $text-color
    &:hover
      color $text-color-hover
    &:first-child
      border-top 1px solid #274058

  >.nav-mobile-list >.router-link-active
    color $text-color-hover

  >.mobile-shade
    position fixed
    top 0
    left 0
    width 100%
    height 100%
</style>
