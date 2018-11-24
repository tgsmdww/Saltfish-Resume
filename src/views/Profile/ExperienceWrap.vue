<template lang="pug">
.experience-wrap
  .head
    img.prepic(
      :src="pic"
    )
    .title
      h4.name(
        v-html="name"
      )
      h4.time(
        v-html="time"
      )
  p.content(
    v-html="content"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Experience extends Vue {
  @Prop(String)
  pic!: string;
  @Prop(String)
  time!: string;
  @Prop(String)
  name!: string;
  @Prop(String)
  content!: string;
}
</script>

<style lang="stylus" scoped>
.experience-wrap
  display flex
  flex-wrap wrap
  margin-left 1em
  @media screen and (max-width :470px)
    margin-bottom 1.5em

  >.head
    display flex
    flex-wrap nowrap

    >.prepic
      display inline-block
      margin-top 5px
      border-radius 50%
      width auto
      height 50px

    >.title
      display flex
      flex-wrap wrap
      position relative
      margin 0
      margin-top 5px
      margin-left 1em
      @media screen and (max-width :745px)
        display block

    >.title >.name
      display inline-block
      margin 0
      @media screen and (max-width :745px)
        display block

    >.title >.time
      display inline-block
      position absolute
      left 20em
      margin 0
      width 10em
      @media screen and (max-width :745px)
        display block
        position static

  >.content
    position relative
    left 66px
    bottom 2em
    width calc(100% - 60px)
    line-height 2
    color white
    @media screen and (max-width :745px)
      bottom 1em
    @media screen and (max-width :470px)
      position static
      width 100%
</style>
