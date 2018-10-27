<template lang="pug">
.type1-wrap
  .infomation
    .head
      svg.icon.number(aria-hidden="true")
        use(:xlink:href="number")
      h2.title(
        v-html = "title"
      )
    p.content(
      v-html = "content"
    )
    ul.list
      li.list-item(
        v-for="item in list"
        v-html="item"
      )
  img.pic(
    :src="picsrc"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag1 extends Vue {
  @Prop(String)
  title!: string;
  @Prop(String)
  content!: string;
  @Prop(String)
  number!: string;
  @Prop(String)
  picsrc!: string;
  @Prop(Array)
  list!: string[];
}
</script>

<style lang="stylus" scoped>
.type1-wrap
  display flex
  align-items center
  justify-content space-between
  margin 0 auto
  margin-top 20px
  margin-bottom 20px
  border solid #274058 1px
  border-radius 5px
  height auto
  background-color rgba(255, 255, 255, 0.01)

  >.infomation
    display flex
    flex-direction column
    justify-content center
    box-sizing border-box
    padding-left 1em
    width 40%
    height auto

    >.head
      display flex
      justify-content flex-start
      align-items center

      >.icon
        display inline-block
        margin-right 1em
        width 1.5em
        height 1.5em

      >.title
        display inline-block
        margin .1em 0

    >.content
      line-height 2em
      margin .5em 0

    >.list
      margin .5em 0
      >.list-item
        line-height 1.5


  >.pic
    display block
    box-sizing border-box
    margin 0 auto
    border-left solid 1px rgba(255, 255, 255, 0.1)
    padding 1em
    width 57%
    opacity 0.9

  @media screen and (max-width : 835px)
    flex-direction column
    max-height 1000px

    >.infomation
      width 100%
      padding 1em
      border-right none
      border-bottom solid 1px rgba(255, 255, 255, 0.1)

      >.head >.icon
        width 1.5em
        height 1.5em
      >.head>.title
        font-size 1.1em

      >.content
        margin-bottom 0
        font-size 1em

    >.pic
      width 100%
      padding 0.5em
      border-left none
</style>
