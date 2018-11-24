<template lang="pug">
.chi19-video
  iframe.video(
    src="https://drive.google.com/file/d/1QuJlDkc0Eq9pVeyYWjHgX7hrk9ksX7Eb/preview"
    width="640"
    height="480"
  )

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Video extends Vue {}
</script>

<style lang="stylus" scoped>
.chi19-video
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
