<template lang="pug">
.mark-wrap
  h2.title(
    v-html = "title"
  )
  gc-line
  .body
    svg.icon.up(aria-hidden="true")
      use(xlink:href="#icon-qianyinhao")
    .content
      slot
    svg.icon.down(aria-hidden="true")
      use(xlink:href="#icon-houyinhao")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MarkWrap extends Vue {
  @Prop(String)
  title!: string;
}
</script>

<style lang="stylus" scoped>
.mark-wrap
  margin 0

  >.title
    margin 0 0 1em 0
    letter-spacing 0.1em

  >.body
    display flex
    justify-content center
    align-items flex-start
    position relative
    margin 2em 0
    line-height 2em
    font-style italic
    >.up
      position relative
      display inline-block
      width 1.5em
      height 1.5em
    >.content
      display inline-block
      text-align center
      font-size 1.5em
    >.down
      align-self flex-end
      position relative
      display inline-block
      width 1.5em
      height 1.5em

  @media screen and (max-width :645px)
    >.title
      font-size 1.1em

    >.body
      >.content
        font-size 1em

      >.up
      >.down
        width 1em
        height 1em
</style>
