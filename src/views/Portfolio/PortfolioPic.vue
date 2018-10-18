<template lang="pug">
.portfolio-pic
  router-link.pic(
    tag="img"
    :to="router"
    :src="path")
  router-link.info(
  :to="router"
  :class="type"
)
    p.title {{title}}
    .content
      p.content1 {{content1}}
      p.content2 {{content2}}
    p.learnmore Learn More
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class item extends Vue {
  @Prop(String)
  router!: string;
  @Prop(String)
  path!: string;
  @Prop(String)
  type!: string;
  @Prop(String)
  title!: string;
  @Prop(String)
  content1!: string;
  @Prop(String)
  content2!: string;
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
  margin 1em
  width $width
  height $height
  @media screen and (max-width : 1146px)
    width 0.75*$width
    height 0.75*$height

  @media screen and (max-width : 885px)
    margin .5em
    width 0.6*$width
    height 0.6*$height

  >.pic
    width 100%*(400/560)
    height 100%
    cursor pointer
    box-shadow 0 2px 5px 0 rgba(0,0,0,0.5), 0 19px 38px 0 rgba(0,0,0,0.4)
  >.info
    position relative
    margin-top 100%*(200/560)
    margin-left -100%*(80/560)
    width 100%*(240/560)
    height 100%*(160/400)
    cursor pointer
    color black
    text-decoration none
    background-color rgba(255,255,255,0.9)
    transition box-shadow .4s
    box-shadow 0 2px 5px 0 rgba(0,0,0,0.5), 0 19px 38px 0 rgba(0,0,0,0.4)
    &:hover
      box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.7), 0 26px 38px 0 rgba(0, 0, 0, 0.9)

    >.title
      margin 0
      padding-top 15px
      padding-left 10px
      font-weight bold
      font-size (1.3/1.6)*$title-font-size
      font-variant small-caps
      @media screen and (max-width : 1146px)
        padding-top 12px
        padding-left 10px
      @media screen and (max-width : 885px)
        padding-top 7px
        padding-left 6px

    >.content
      display flex
      align-items flex-start
      justify-content center
      flex-direction column
      position absolute
      top 50%
      height 40.1px
      margin-top -20.05px
      padding-left 10px
      line-height 1.2em
      font-style italic
      font-size 0.55*$title-font-size
      font-variant small-caps
      @media screen and (max-width : 1146px)
        padding-left 10px
        font-size 0.43*$title-font-size
      @media screen and (max-width : 885px)
        padding-left 6px
        font-size 0.36*$title-font-size

    >.content >.content1
    >.content >.content2
        margin 0

    >.learnmore
      position absolute
      bottom 15%
      margin 0
      padding-left 10px
      font-weight bold
      font-size 0.44*$title-font-size
      font-variant small-caps
      @media screen and (max-width : 1146px)
        padding-left 10px
        font-size 0.45*$title-font-size

      @media screen and (max-width : 885px)
        padding-left 6px
        font-size 0.37*$title-font-size



</style>
