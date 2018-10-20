<template lang="pug">
.assets18
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
    border-wrap(
      :title="information.title2"
      :content="information.content2"
    )
    download-button(
      :pdfhref="information.pdfhref"
      :pdfcontent="information.pdfcontent"
    )
    wrap(
      :title="information.title3"
    )
    .atlas
      pic-wrap.pic.global-fade-in(
        v-for="(pic,i) in atlas"
        :key="i"
        :picsrc="pic.picsrc"
        :alt="pic.name"
        :content="pic.content"
      )
  wrap.qawrap(
    :title="information.title4"
  )
  ask-question(
    v-for="(QA, i) in QAs"
    :key="i"
    :question="QA.question"
    :answer="QA.answer"
  )
  gc-copyright
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import wrap from "./components/wrap.vue";
import HeadWrap from "./components/HeadWrap.vue";
import BorderWrap from "./components/BorderWrap.vue";
import DownloadButton from "./components/DownloadButton.vue";
import PicWrap from "./components/PicWrap.vue";
import AskQuestion from "./components/AskQuestion.vue";
import { information, atlas, QA } from "@/data/portfolio/1";
import MyMixin from "@/mixin";

@Component({
  components: {
    wrap,
    HeadWrap,
    BorderWrap,
    DownloadButton,
    PicWrap,
    AskQuestion
  }
})
export default class portfolio1 extends Mixins(MyMixin) {
  information: object = information;
  atlas: object[] = atlas;
  QAs: object[] = QA;

  mounted() {
    this.inView();
  }
}
</script>

<style lang="stylus" scoped>
.assets18
  color #e6e6e6

  >.background
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
    background-image linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/Portfolio/assets18/background.jpg")
    background-repeat no-repeat
    background-size 100%
    @media screen and (max-width : 1300px)
      width 1300px

  >.wrapper
    margin-top 10%
    padding 100px 10%
    background-image url('../../assets/background.svg')
    background-repeat no-repeat
    background-size 100%
    background-color #102131
    clip-path: polygon(0 3%, 100% 0, 100% 100%, 0 97%)
    @media screen and (max-width : 645px)
      padding 5% 10%
      clip-path polygon(0 1%, 100% 0, 100% 100%, 0 99%)

    >.atlas
      display flex
      flex-direction column
      justify-content center
      margin-top 0
    >.atlas >.pic
      margin-bottom 2em

  >.qawrap
    margin 50px 15%
</style>
