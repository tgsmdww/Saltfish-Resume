<template lang="pug">
.quote-wrap
  .blank
  img.avatar(
    :src="picsrc"
  )
  h4.title(
    v-html="title"
  )
  q.quote(
    v-html="content"
  )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class quote extends Vue {
  @Prop(String)
  picsrc!: string;
  @Prop(String)
  title!: string;
  @Prop(String)
  content!: string;
}
</script>

<style lang="stylus" scoped>
.quote-wrap
  display flex
  flex-direction column
  align-items center
  position relative
  margin 0.5em
  min-width 150px
  max-width 300px
  height auto
  box-shadow 0 2px 5px 0 rgba(0,0,0,0.5), 0 19px 38px 0 rgba(0,0,0,0.4)
  transition box-shadow .4s

  @media screen and (max-width : 830px)
    max-width 500px
  @media screen and (max-width : 740px)
    margin 1em

  &:hover
    position relative
    z-index 1
    box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.7), 0 26px 38px 0 rgba(0, 0, 0, 0.9)

  >.blank
    width 100%
    height 80px
    border-bottom 1px solid rgba(255,255,255,0.3)

  >.avatar
    display inline-block
    position absolute
    top 15px
    border-radius 50%
    width 90px
    height 90px

  >.title
    margin-top 40px
    margin-bottom 10px
    font-size 1.2em

  >.quote
    margin-bottom 1.5em
    padding 1em
</style>
