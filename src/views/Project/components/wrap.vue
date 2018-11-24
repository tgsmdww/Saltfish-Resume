<template lang="pug">
.wrap
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
export default class Wrap extends Vue {
  @Prop(String)
  title!: string;
  @Prop(String)
  content!: string;
}
</script>

<style lang="stylus" scoped>
.wrap
  margin 2em 0

  >.title
    margin 0 0 1em 0
    letter-spacing 0.1em

  >.content
    margin 1em 0 0 0
    line-height 2em
    font-size 1.2em

  @media screen and (max-width : 645px)
    >.title
      font-size 1.1em

    >.content
      font-size 1em
</style>
