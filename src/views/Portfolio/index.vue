<template lang="pug">
.portfolio-page
  h1.title Portfolio
  gc-line
  fliterbar(
    :selected="selected"
    :types='["All","Research","Projects","Others"]'
    :typeChangeHandle="typeChangeHandle"
  )
  transition-group(name="list" tag="div" class="itemlist")
    portfolio-pic(
      v-for="(item, i) in items"
      :key="i"
      v-show="item.type==selected || selected=='All'"
      :class="[item.type,item.name]"
      :router="item.router"
      :picsrc1="item.picsrc1"
      :picsrc2="item.picsrc2"
    )
  gc-copyright.copyright
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PortfolioPic from "./PortfolioPic.vue";
import Portfolios from "@/data/portfolio";
import fliterbar from "@/components/FliterBar.vue";

@Component({
  components: {
    PortfolioPic,
    fliterbar
  }
})
export default class Portfolio extends Vue {
  items: object[] = Portfolios;
  selected: string = "All";

  typeChangeHandle(type: string): any {
    this.selected = type;
  }
}
</script>


<style lang="stylus" scoped>

.list-enter,
.list-leave-to
  opacity 0
  transform translateY(30px)

.list-leave-active
  position absolute

.portfolio-page .portfolio-pic
  transition all 1s

.portfolio-page
  >.title
    margin-bottom 20px
    color #c5e5ff
    text-align left

    @media screen and (max-width : 420px)
      margin 0 auto
      margin-top 50px
      margin-bottom 20px
      text-align center

  >.itemlist
    display flex
    flex-wrap wrap
    justify-content center
    position relative
    left 1%
    margin-top 2em
    margin-right 50px
    width 100%

.home-portfolio
  >.copyright
    display none
</style>
