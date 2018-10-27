<template lang="pug">
.information
  h1.name {{head}}
  h3.research {{research}}
  p.content(
    v-html="content"
  )
  a.thoughts(
    href="https://docs.google.com/document/d/1W0ghwVkhBiijrPcyEAMsKwp6U18biX0ul-OwqYptQrE/edit?usp=sharing"
    target="_blank"
    v-html="thoughts"
  )
  a.cv(
    href="/pdf/ZhuohaoZhang-CV.pdf"
    target="_blank"
    v-html="cv"
  )
  .contact.global-fade-in
    a(href="mailto:zhuohaozhang@zju.edu.cn" target="_blank")
      svg.icon.email(
        aria-hidden="true"
      )
        use(xlink:href="#icon-email")
    a(href="https://www.github.com/saltfishzzh" target="_blank")
      svg.icon.github(
        aria-hidden="true"
      )
        use(xlink:href="#icon-github")
    a(href="https://www.linkedin.com/in/zhuohao-zhang-08656510a/" target="_blank")
      svg.icon.linkedin(
        aria-hidden="true"
      )
        use(xlink:href="#icon-linkedin")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import selfintro from "@/data/mainintro";

@Component
export default class MainIntro extends Vue {
  head: string = selfintro.name;
  research: string = selfintro.research;
  content: string = selfintro.content;
  cv: string = selfintro.cv;
  thoughts: string = selfintro.thoughts;
  email: string = selfintro.email;
  github: string = selfintro.github;
  linkedin: string = selfintro.linkedin;
}
</script>

<style lang="stylus" scoped>
.information
  margin 0
  max-width 420px
  height auto
  text-align right
  @media screen and (max-width : 900px)
    text-align center
  @media screen and (max-width : 645px)
    margin-top 20px
    margin-left 6%
    margin-right 6%

  >.name
    margin-top 0
    margin-bottom 10px
    color #c5e5ff
    @media screen and (max-width : 900px)
      margin 10px auto
      margin-top 0
      text-align center

  >.research
    margin-top 10px
    margin-bottom 15px
    color white
    @media screen and (max-width : 900px)
      margin 10px auto
      margin-top 0
      text-align center
    @media screen and (max-width : 645px)
      margin-top 25px

  >.content
    margin-bottom 10px
    margin 0 10px 10px 10px
    line-height 1.5
    text-indent 2em
    color #8594af
    @media screen and (max-width : 900px)
      text-indent 0
    @media screen and (max-width : 645px)
      margin-top 25px

  >.cv
    font-size 20px
    font-weight bold
    text-decoration none
    color #c5e5ff
    cursor pointer
    @media screen and (max-width : 900px)
      display inline-block
      margin 0 auto
      text-align center

  >.thoughts
    font-size 20px
    font-weight bold
    text-decoration none
    color #c5e5ff
    cursor pointer
    @media screen and (max-width : 900px)
      display inline-block
      margin 0 auto
      text-align center

  >.contact
    margin-top 20px
    @media screen and (max-width : 900px)
      margin 10px auto
      text-align center

    .email
      width 32px
      height 32px
      margin-right 10px
      color #c5e5ff

    .github
      width 32px
      height 32px
      margin-right 10px
      color #c5e5ff

    .linkedin
      width 32px
      height 32px
      color #c5e5ff


</style>
