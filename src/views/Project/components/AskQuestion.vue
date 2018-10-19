<template lang="pug">
.qa-wrap
  blockquote.question(
    v-html = "question"
  )
  p.answer(
    v-html = "answer"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AskQuestion extends Vue {
  @Prop(String)
  question!: string;
  @Prop(String)
  answer!: string;
}
</script>

<style lang="stylus" scoped>
.qa-wrap
  margin 50px 15%

  >.question
    margin 0 0 2em 0
    padding 0.5em 0 0.5em 2em
    border-left solid 4px rgba(255,255,255,0.125)
    font-style italic
    font-weight bold
    font-size 1.5em

  >.answer
    line-height 2em

  @media screen and (max-width : 645px)
    >.question
      font-size 1em

    >.answer
      font-size 0.9em

    @media screen and (max-width : 420px)
      >.question
        position relative
        left -0.5em
        padding 0.2em 0 0.2em 0.5em
        margin-bottom 1em
</style>
