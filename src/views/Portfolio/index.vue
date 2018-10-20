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
    portfolio-pic(
      v-for="(item, i) in items"
      :key="i"
      v-show="item.type==selected || selected === 'All'"
      :class="[item.type, item.name, selected === 'All' ? 'global-fade-in' : '']"
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
import mixin from "@/mixin";

@Component({
  components: {
    PortfolioPic,
    fliterbar
  },
  mixins: [mixin],
  mounted() {
    (this as any).inView();
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
    display flex
    flex-wrap wrap
    justify-content center
    position relative
    left 1%
    margin-top 2em
    margin-right 50px
    width 100%

//as homepage component
.home-portfolio
  >.copyright
    display none
</style>
