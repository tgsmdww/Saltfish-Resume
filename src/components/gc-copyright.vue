<template lang="pug">
p.copyright Copyright © by Zhuohao Zhang. All Rights Reserved.
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Imglink extends Vue {}
</script>

<style lang="stylus" scoped>
.copyright
  margin 0 auto
  margin-top 5em
  margin-bottom 2em
  width 70%
  text-align center
  line-height 1.5em
  @media screen and (max-width :420px)
    font-size 0.9em
</style>
