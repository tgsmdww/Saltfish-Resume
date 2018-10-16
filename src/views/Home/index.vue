<template lang="pug">
.home-page
  .introduction
    introduction
    .line
    avatar
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Introduction from "./Introduction.vue";
import Avatar from "./Avatar.vue";

@Component({
  components: {
    Introduction,
    Avatar,
  }
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.home
  .info
    display flex
    flex-wrap nowrap
    justify-content center
    align-items center
    height 420px
    margin 0 auto
    padding-bottom 50px
    text-align center

    @media screen and (max-width : 900px)
      flex-wrap wrap
      height auto
      padding 0

    .line
      margin 0 65px 0 60px
      height 100%
      width 1px
      background-color white

      @media screen and (max-width : 900px)
        display none

</style>
