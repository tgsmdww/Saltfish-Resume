<template lang="pug">
.pic-wrap
  img.picture(:src="picsrc")
  p.content {{content}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class PicWrap extends Vue {
  @Prop(String)
  picsrc!: string;
  @Prop(String)
  content!: string;
}
</script>

<style lang="stylus" scoped>
.pic-wrap
  display flex
  align-items center
  flex-direction column
  >.picture
    margin 0 auto
    border-radius 5px
    width 100%
    max-width 600px

  >.content
    width 100%
    max-width 600px
    text-align center
    font-size 1.3em

    @media screen and (max-width : 645px)
      font-size 0.9em
</style>
