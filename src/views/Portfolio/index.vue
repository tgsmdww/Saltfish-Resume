<template lang="pug">
.portfolio-page
  h1.title Portfolio
  gc-line
  fliterbar(
    :selected="selected"
    :types='["All","Research","Projects","Others"]'
    :typeChangeHandle="typeChangeHandle"
  )
  .itemlist
    portfolio-pic.global-fade-in(
      v-for="(item, i) in items"
      :key="i"
      v-show="item.type==selected || selected === 'All'"
      :class="[item.type, item.name]"
      :router="item.router"
      :picsrc1="item.picsrc1"
      :picsrc2="item.picsrc2"
    )
  gc-copyright.copyright
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import PortfolioPic from "./PortfolioPic.vue";
import Portfolios from "@/data/portfolio";
import fliterbar from "@/components/FliterBar.vue";
import MyMixin from "@/mixin";

@Component({
  components: {
    PortfolioPic,
    fliterbar
  }
})
export default class Portfolio extends Mixins(MyMixin) {
  items: object[] = Portfolios;
  selected: string = "All";

  mounted() {
    this.inView();
  }

  typeChangeHandle(type: string) {
    this.selected = type;
  }
}
</script>

<style lang="stylus" scoped>
.portfolio-page
  color #c5e5ff
  >.title
    margin-bottom 20px
    text-align left

    @media screen and (max-width : 420px)
      margin 0 auto
      margin-top 50px
      margin-bottom 20px
      text-align center

  >.itemlist
    margin-left 50px
    display flex
    flex-wrap wrap
    justify-content left
    position relative
    left 1%
    margin-top 2em
    margin-right 50px
    width 100%

    @media screen and (max-width : 420px)
      margin-left 0px
      justify-content center

//as homepage component
.home-portfolio
  >.copyright
    display none
</style>
