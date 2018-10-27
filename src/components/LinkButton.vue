<template lang="pug">
a.link-button(
  :href="weblink"
  target="_blank"
)
  p.content {{webdescribtion}}
  svg.icon.weblink(aria-hidden="true")
    use(xlink:href="#icon-link")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  @Prop(String)
  weblink!: string;
  @Prop(String)
  webdescribtion!: string;
}
</script>

<style lang="stylus" scoped>
.link-button
  display flex
  align-items center
  justify-content center
  margin 0 auto
  margin-bottom 40px
  border 1px solid white
  border-radius 20px
  width 240px
  text-decoration none
  letter-spacing 0.1em
  color white
  background transparent
  cursor pointer
  transition background-color 0.2s ease-in-out

  &:hover
    color gray
    background-color white
  &:active
    background-color white
  &:visited
    color white
  @media screen and (max-width : 420px)
    font-size .8em
    width 80%
    min-width 180px
  >.weblink
    margin-left 10px
    margin-right -10px
    width 20px
    height 20px
    @media screen and (max-width : 645px)
      width 20px
      height 20px

</style>
