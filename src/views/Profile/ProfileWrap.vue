<template lang="pug">
.Profile-wrap
  h4.title(
    v-html="title"
  )
  p.content1(
    v-html="content1"
  )
  p.content2(
    v-html="content2"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Interest extends Vue {
  @Prop(String)
  title!: string;
  @Prop(String)
  content1!: string;
  @Prop(String)
  content2!: string;
}
</script>

<style lang="stylus" scoped>
.Profile-wrap
  margin-left 1em
  line-height 2

  >.title
    margin 0

  >.content1
    margin 0
    color white

  >.content2
    margin-top 0
    margin-bottom 40px
    color white
</style>
