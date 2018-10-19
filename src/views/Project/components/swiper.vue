<template lang="pug">
.swiper
  swiper(
    :options="swiperOption"
  )
    swiper-slide(
      v-for="(pic,i) in atlas"
      :key="i"
    )
      img.pic(:src="pic.picsrc")
    .swiper-pagination(
      slot="pagination"
    )
    .swiper-button-prev(
      slot="button-prev"
    )
    .swiper-button-next(
      slot="button-next"
    )

</template>

<script lang="ts">
import "swiper/dist/css/swiper.css";
import { Component, Prop, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Swiper extends Vue {
  @Prop(Array)
  atlas!: object[];
  swiperOption: object = {
    autoplay: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
}
</script>

<style lang="stylus" scoped>
.swiper
  margin 0 auto

  .swiper-button-next
  .swiper-button-prev
    height 20px

  .pic
    max-width 100%

</style>
