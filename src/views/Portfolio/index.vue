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
      :path="item.path"
      :title="item.title"
      :content1="item.content1"
      :content2="item.content2"
    )
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
    justify-content space-around
    position relative
    left 1%
    margin-top 2em
    margin-right 50px
    width 100%

    >.item2
      & >>> .title
        font-size 0.9em
    >.item5
      & >>> .title
        font-size 1.1em

    >.item6
      & >>> .title
        font-size 1.3em

    >.item7
      & >>> .title
        font-size 1.05em

    >.item8
      & >>> .title
        font-size 1.2em


    @media screen and (max-width : 1146px)
      >.item1
        & >>> .title
          font-size 1em
      >.item2
        & >>> .title
          font-size .68em

      >.item3
        & >>> .title
          font-size 1em

      >.item4
        & >>> .title
          font-size 1em

      >.item5
        & >>> .title
          font-size .9em

      >.item6
        & >>> .title
          font-size .9em

      >.item7
        & >>> .title
          font-size .8em

      >.item8
        & >>> .title
          font-size 0.9em

    @media screen and (max-width : 885px)
      left 0
      >.item1
        & >>> .title
          font-size .8em
      >.item2
        & >>> .title
          font-size .53em

      >.item3
        & >>> .title
          font-size .8em
        & >>> .content
          font-size .57em !important

      >.item4
        & >>> .title
          font-size .8em

      >.item5
        & >>> .title
          font-size .72em

      >.item6
        & >>> .title
          font-size .75em

      >.item7
        & >>> .title
          font-size .64em


      >.item8
        & >>> .title
          font-size .72em
</style>
