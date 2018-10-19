<template lang="pug">
.menupedia
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
    menupedia-video
    mark-wrap(
      :title="information.title2"
    )
      p.titleup(
        v-html="information.title2_1"
      )
      p.titledown(
        v-html="information.title2_2"
      )

    .content(
      v-html="information.content2"
    )
    wrap(
      :title="information.title3"
    )

    .quotes
      quote-wrap(
        v-for="(somebody,i) in quotes"
        :key="i"
        :picsrc="somebody.avatar"
        :title="somebody.name"
        :content="somebody.say"
      )

    mark-wrap(
      :title="information.title4"
    )
      p.titleup(
        v-html="information.title4_1"
      )
      p.titledown(
        v-html="information.title4_2"
      )
    .icons
      svg.icon.ar(aria-hidden="true")
        use(xlink:href="#icon-ar")
      .others
        svg.icon.food(aria-hidden="true")
          use(xlink:href="#icon-food")
        svg.icon.plus(aria-hidden="true")
          use(xlink:href="#icon-plus")
        svg.icon.picture(aria-hidden="true")
          use(xlink:href="#icon-picture")

    .solution-wrap
      p.ask(
        v-html="information.content4"
      )
      p.solution(
        v-html="information.title5"
      )
      .triangle
      p.answer(
        v-html="information.content5"
      )

    .tags
      tag1(
        v-for="(tag,i) in type1"
        :key="i"
        :title="tag.title"
        :number="tag.number"
        :content="tag.content"
        :picsrc="tag.picsrc"
      )

      tag2(
        :title="information.type2"
        :number="information.type2number"
        :pictures="type2"
      )

  wrap.acknowledge-wrap(
    :title="information.title6"
    :content="information.content6"
  )

  gc-copyright
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wrap from "./components/wrap.vue";
import HeadWrap from "./components/HeadWrap.vue";
import MenupediaVideo from "./components/MenupediaVideo.vue";
import MarkWrap from "./components/MarkWrap.vue";
import QuoteWrap from "./components/QuoteWrap.vue";
import Tag1 from "./components/Tag1.vue";
import Tag2 from "./components/Tag2.vue";
import { information, quotes, type1, type2 } from "@/data/portfolio/3";

@Component({
  components: {
    wrap,
    HeadWrap,
    MenupediaVideo,
    MarkWrap,
    QuoteWrap,
    Tag1,
    Tag2
  }
})
export default class portfolio1 extends Vue {
  information: object = information;
  quotes: object[] = quotes;
  type1: object[] = type1;
  type2: object[] = type2;
}
</script>

<style lang="stylus" scoped>
.menupedia
  color #e6e6e6

  >.background
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
    background-image linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/Portfolio/menupedia/background.png")
    background-repeat no-repeat
    background-size 100%
    @media screen and (max-width : 760px)
      width 760px

  >.wrapper
    margin-top 10%
    padding 100px 10%
    background-image url('../../assets/background.svg')
    background-repeat no-repeat
    background-size 100%
    background-color #102131
    clip-path polygon(0 1%, 100% 0, 100% 100%, 0 99%)
    @media screen and (max-width : 645px)
      padding 5% 10%
      clip-path polygon(0 0.5%, 100% 0, 100% 100%, 0 99.5%)

    .titleup
      margin-top 0
    .titledown
      margin-bottom 0

    >.content
      margin-top 20px
      margin-bottom 50px
      font-size 1.1em
      text-align center
      line-height 1.5em
      @media screen and (max-width : 645px)
        font-size 0.9em

    >.quotes
      display flex
      flex-wrap nowrap
      justify-content space-around
      margin-bottom 40px
      @media screen and (max-width : 740px)
        flex-wrap wrap

    >.icons
      display flex
      justify-content space-between
      align-items center
      >.ar
        position relative
        left 30%
        width 98px
        height 40px
        @media screen and (max-width : 700px)
          left 20%
          width 70px
          height 30px

      >.others
        display flex
        justify-content center
        align-items center
        position relative
        right 30%
        width 100px
        >.food
          width 30px
          height 38px
        >.plus
          width 17px
          height 17px
        >.picture
          width 32px
          height 32px
        @media screen and (max-width : 700px)
          right 20%
          >.food
            width 25px
            height 27px
          >.plus
            width 15px
            height 15px
          >.picture
            width 25px
            height 25px

    >.solution-wrap
      text-align center
      letter-spacing 0.1em
      >.ask
        margin-top 3em
        margin-bottom 1.5em
        font-size 1.3em


      >.solution
        margin-bottom 10px
        font-size 1.5em


      >.triangle
        margin 0 auto
        border 10px solid transparent
        border-top 10px solid gray
        width 0
        height 0

      >.answer
        line-height 2em
        font-size 1.3em

      @media screen and (max-width : 645px)
        >.ask
          font-size 1em

        >.solution
          font-size 1.2em

        >.answer
          font-size 1.1em

  >.acknowledge-wrap
    margin 50px 15%
    text-align right
    @media screen and (max-width : 645px)
      margin 50px 10%
      text-align center
</style>
