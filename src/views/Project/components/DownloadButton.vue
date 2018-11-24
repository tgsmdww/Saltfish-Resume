<template lang="pug">
a.download-button(
  :href="pdfhref"
  target="_blank"
)
  svg.icon.download(aria-hidden="true")
    use(xlink:href="#icon-download")
  p.content {{pdfcontent}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Contact extends Vue {
  @Prop(String)
  pdfhref!: string;
  @Prop(String)
  pdfcontent!: string;
}
</script>

<style lang="stylus" scoped>
.download-button
  display flex
  align-items center
  justify-content center
  margin 0 auto
  margin-bottom 40px
  border-radius 5px
  width 250px
  text-decoration none
  letter-spacing 0.1em
  color white
  background-color #4c5c96
  cursor pointer
  transition background-color 0.2s ease-in-out

  &:hover
    background-color #536391
  &:active
    background-color #45558d
  &:visited
    color white
  @media screen and (max-width : 420px)
    font-size .8em
    width 80%
    min-width 180px
  >.download
    margin-right 10px
    width 30px
    height 30px
    @media screen and (max-width : 645px)
      width 20px
      height 20px
</style>
