<template lang="pug">
.portfolio-pic(:class="type")
  router-link.pic-wrap(:to="router")
    img.pic(:src="picsrc1")
  router-link.info(:to="router")
    img.describe(:src="picsrc2")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class item extends Vue {
  @Prop(String)
  router!: string;
  @Prop(String)
  picsrc1!: string;
  @Prop(String)
  picsrc2!: string;
  @Prop(String)
  type!: string;
}
</script>

<style lang="stylus" scoped>
$title-font-size = 1.6em
$width = 560px * 0.75
$height = 400px * 0.75
.portfolio-pic
  display flex
  flex-wrap nowrap
  position relative
  margin 2em
  width $width
  height $height
  @media screen and (max-width : 1146px)
    width 0.75*$width
    height 0.75*$height

  @media screen and (max-width : 885px)
    margin .5em
    width 0.6*$width
    height 0.6*$height

  >.pic-wrap
    width 100%*(400/560)
    height 100%
    cursor pointer
    box-shadow 0 2px 5px 0 rgba(0,0,0,0.5), 0 19px 38px 0 rgba(0,0,0,0.4)
    >.pic
      width 100%

  >.info
    position relative
    margin-top 100%*(200/560)
    margin-left -100%*(80/560)
    width 100%*(240/560)
    height 100%*(160/400)
    cursor pointer
    background-color rgba(255,255,255,0.9)
    transition box-shadow .4s
    box-shadow 0 2px 5px 0 rgba(0,0,0,0.5), 0 19px 38px 0 rgba(0,0,0,0.4)
    &:hover
      box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.7), 0 26px 38px 0 rgba(0, 0, 0, 0.9)
    >.describe
      width 100%


</style>
