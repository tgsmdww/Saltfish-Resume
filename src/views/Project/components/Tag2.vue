<template lang="pug">
.tag2-wrap
  .information
    svg.icon.number(aria-hidden="true")
      use(:xlink:href="number")
    h2.title(
      v-html = "title"
    )
  img.pic(
    v-for="(pic, i) in pictures"
    :key="i"
    :src="pic.picsrc"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag2 extends Vue {
  @Prop(String)
  title!: string;
  @Prop(String)
  number!: string;
  @Prop(Array)
  pictures!: object[];
}
</script>

<style lang="stylus" scoped>
.tag2-wrap
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto
  margin-top 20px
  margin-bottom 20px
  border solid #274058 1px
  border-radius 5px
  width 100%
  background-color rgba(255, 255, 255, 0.01)

  >.information
    display flex
    justify-content left
    align-items center
    box-sizing border-box
    border-bottom solid 1px rgba(255, 255, 255, 0.1)
    padding 1em
    width 100%

    >.icon
      display inline-block
      margin-right 1em
      width 2em
      height 2em
    >.head
      letter-spacing 0.1em

  >.pic
    display block
    box-sizing border-box
    width 100%
    height auto
    padding 1em
    opacity 0.9

  @media screen and (max-width : 762px)
    width 100%
    >.information
      >.icon
        width 1.5em
        height 1.5em
      >.head
        font-size 1.1em
    >.pic
      width 100%
      padding 0.5em
</style>
