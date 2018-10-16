<template lang="pug">
ul.typebar
  li.type(
    v-for="t in types"
    :class="{'-chose': t==selected}"
    @click="typeChangeHandle(t)"
  )
    | {{ t }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FliterBar extends Vue {
  @Prop(Array)
  types!: string[];
  @Prop(Function)
  typeChangeHandle!: any;
  @Prop(String)
  selected!: string;
}
</script>

<style lang="stylus" scoped>
$text-color = #8e8e8e
$text-color-hover = #ffffff

.typebar
  display flex
  justify-content center
  flex-wrap wrap
  padding 0

  >.type
    list-style none
    margin 0 25px
    font-size 1.3em
    color $text-color
    cursor pointer
    &:hover
      color $text-color-hover

  @media screen and (max-width :545px)
    justify-content space-around

    >.type
      margin 0
      font-size 1em

  >.-chose
    font-weight bold
    color $text-color-hover
    border-bottom 1px solid $text-color-hover
</style>
