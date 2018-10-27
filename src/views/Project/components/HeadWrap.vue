<template lang="pug">
.header-wrap
  h2.title(
    v-html = "title"
  )
  gc-line
  p.content(
    v-html = "content"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  @Prop(String)
  title!: string;
  @Prop(String)
  content!: string;
}
</script>

<style lang="stylus" scoped>
.header-wrap
  margin 0 10%
  margin-top 20px
  letter-spacing 0.1em
  >.title
    margin 0 0 1em 0
    letter-spacing 0.1em
    font-size 3em
    font-weight 600

  >.content
    margin 1em 0 1em 0
    font-size 1.5em
    font-weight 300
    line-height 2
  @media screen and (max-width : 645px)
    >.title
      font-size 1.45em
    >.content
      font-size 1em

  @media screen and (max-width : 420px)
    >.head
      font-size 1.2em
</style>
