<template lang="pug">
.graphicsdesign
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
    .swiperwrap
      wrap.discription(
        :title="information.title2"
        :content="information.content2"
      )
      swiper.swiper(
        :atlas="atlas1"
      )
    .swiperwrap
      wrap.discription(
        :title="information.title3"
        :content="information.content3"
      )
      swiper.swiper(
        :atlas="atlas2"
      )
    .swiperwrap
      wrap.discription(
        :title="information.title4"
        :content="information.content4"
      )
      swiper.swiper(
        :atlas="atlas3"
      )

  gc-copyright
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wrap from "./components/wrap.vue";
import HeadWrap from "./components/HeadWrap.vue";
import swiper from "./components/swiper.vue";

import { information, atlas1, atlas2, atlas3 } from "@/data/portfolio/6";
import { atlas } from "@/data/portfolio/1";

@Component({
  components: {
    wrap,
    HeadWrap,
    swiper
  }
})
export default class portfolio1 extends Vue {
  information: object = information;
  atlas1: object[] = atlas1;
  atlas2: object[] = atlas2;
  atlas3: object[] = atlas3;
}
</script>

<style lang="stylus" scoped>
.graphicsdesign
  color #e6e6e6

  >.background
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
    background-image linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/Portfolio/graphicsdesign/background.png")
    background-repeat no-repeat
    background-size 100%
    opacity 0.7
    @media screen and (max-width : 950px)
      width 950px

  >.wrapper
    margin-top 10%
    padding 100px 10%
    background-image url('../../assets/background.svg')
    background-repeat no-repeat
    background-size 100%
    background-color #102131
    clip-path polygon(0 1.5%, 100% 0, 100% 100%, 0 98.5%)
    @media screen and (max-width : 645px)
      padding 5% 10%
      clip-path polygon(0 1%, 100% 0, 100% 100%, 0 99%)

    >.swiperwrap
      display flex
      justify-content space-between
      margin-bottom 50px
      @media screen and (max-width : 1120px)
        flex-direction column
        align-items center

      >.discription
        margin-right 50px
        width 60%
        @media screen and (max-width : 1120px)
          margin-right 0
          width 100%

      >.swiper
        margin 0
        margin-top 80px
        width 40%
        @media screen and (max-width : 1120px)
          margin-top 0
          width 90%
</style>
