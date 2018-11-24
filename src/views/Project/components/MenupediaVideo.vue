<template lang="pug">
.menupedia-video
  iframe.video(
    src="https://www.youtube.com/embed/nBD1JrHceIM"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen)

</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Video extends Vue {}
</script>

<style lang="stylus" scoped>
.menupedia-video
  position relative
  padding-bottom 56.25%
  padding-top 30px
  margin-bottom 50px
  height 0
  overflow hidden

  >.video
    position absolute
    left 0
    top 0
    width 100%
    height 100%
</style>
