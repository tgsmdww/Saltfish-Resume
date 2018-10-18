<template lang="pug">
.chi19
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
    chi19-video
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
      .left
        pic-wrap.pic(
          v-for="(pic,i) in leftatlas"
          :key="i"
          :picsrc="pic.picsrc"
          :alt="pic.name"
          :content="pic.content"
        )
      .right
        pic-wrap.pic(
          v-for="(pic,i) in rightatlas"
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
import { Component, Vue } from "vue-property-decorator";
import wrap from "./components/wrap.vue";
import HeadWrap from "./components/HeadWrap.vue";
import BorderWrap from "./components/BorderWrap.vue";
import DownloadButton from "./components/DownloadButton.vue";
import PicWrap from "./components/PicWrap.vue";
import AskQuestion from "./components/AskQuestion.vue";
import Chi19Video from "./components/Chi19Video.vue";
import { information, leftatlas, rightatlas, QA } from "@/data/portfolio/2";

@Component({
  components: {
    wrap,
    HeadWrap,
    BorderWrap,
    DownloadButton,
    PicWrap,
    AskQuestion,
    Chi19Video
  }
})
export default class portfolio1 extends Vue {
  information: object = information;
  leftatlas: object[] = leftatlas;
  rightatlas: object[] = rightatlas;
  QAs: object[] = QA;
}
</script>

<style lang="stylus" scoped>
.chi19
  color #e6e6e6

  >.background
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    z-index -1
    background-image linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../assets/Portfolio/chi19/background.jpg")
    background-repeat no-repeat
    background-size 100%
    @media screen and (max-width : 1185px)
      width 1185px

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

    >.atlas
      display flex
      flex-wrap nowrap
      justify-content center

    >.atlas >.left
    >.atlas >.right
      display flex
      flex-direction column
      flex-wrap nowrap
      width 40%

    >.atlas >.left
      margin-right 2em

    >.atlas .pic
      margin 1em 0

  >.qawrap
    margin 50px 15%
</style>
