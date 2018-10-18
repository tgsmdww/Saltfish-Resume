<template lang="pug">
.avatar
  img.pic(src="@/assets/saltfish.jpg")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AvatarImg extends Vue {}
</script>

<style lang="stylus" scoped>
.avatar
  >.pic
    box-sizing border-box
    height 320px
    box-shadow -7px 7px 15px rgba(0,0,0,0.8)

    @media screen and (max-width : 900px)
      margin 20px auto
      width 60%
      height auto


    @media screen and (max-width : 420px)
      width 60%

</style>
