<template lang="pug">
.information
  h1.name {{head}}
  h3.research {{research}}
  p.content(
    v-html="content"
  )
  a.cv(
    href="/pdf/ZhuohaoZhang-CV.pdf"
    target="_blank"
  )  {{cv}}
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
  email: string = selfintro.email;
  github: string = selfintro.github;
  linkedin: string = selfintro.linkedin;
}
</script>

<style lang="stylus" scoped>
.information
  margin 0
  max-width 400px
  height auto
  text-align right

  >.name
    margin-top 0
    margin-bottom 10px
    color #c5e5ff

  >.research
    margin-top 10px
    margin-bottom 15px
    color white


  >.content
    margin-bottom 10px
    margin 0 10px 10px 10px
    line-height 1.5
    text-indent 2em
    color #8594af

  >.cv

    font-size 20px
    font-weight bold
    text-decoration none
    color #c5e5ff
    cursor pointer

  >.contact
    margin-top 20px

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


  @media screen and (max-width : 900px)
    text-align center

    >.name
    >.research
      margin 10px auto
      margin-top 0
      text-align center

    >.content
      text-indent 0

    >.cv
      display inline-block
      margin 0 auto
      text-align center

    >.contact
      margin 10px auto
      text-align center

</style>
