<template lang="pug">
.wallcontroller
  .background
  head-wrap(
    :title="information.heading"
    :content="information.introduction"
  )
  .wrapper
    wrap(
      :title="information.title1"
      :content="information.content1"
    )
    h2.nov Working in Progress...Launching on NOV.
    gc-copyright
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wrap from "./components/wrap.vue";
import HeadWrap from "./components/HeadWrap.vue";
import BorderWrap from "./components/BorderWrap.vue";
import DownloadButton from "./components/DownloadButton.vue";
import PicWrap from "./components/PicWrap.vue";
import AskQuestion from "./components/AskQuestion.vue";

import { information } from "@/data/portfolio/8";

@Component({
  components: {
    wrap,
    HeadWrap
  }
})
export default class wallcontroller extends Vue {
  information: object = information;
}
</script>

<style lang="stylus" scoped>
.wallcontroller
  color #e6e6e6

  >.background
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
    background-image linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/Portfolio/wallcontroller/background.png")
    background-repeat no-repeat
    background-size 100%
    @media screen and (max-width : 1300px)
      width 1300px

  >.wrapper
    margin-top 5%
    padding 100px 10%
    padding-bottom 10px
    background-image url('../../assets/background.svg')
    background-repeat no-repeat
    background-size 100%
    background-color #102131
    clip-path polygon(100% 0, 100% 10%, 100% 100%, 0 100%, 0% 10%)
    @media screen and (max-width : 645px)
      padding 5% 10%
      padding-bottom 0

    >.atlas
      display flex
      flex-direction column
      justify-content center
      margin-top 0
    >.atlas >.pic
      margin-bottom 2em

    >.nov
      margin 0 auto
      margin-top 5em
      text-align center



</style>
