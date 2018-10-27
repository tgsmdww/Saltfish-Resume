<template lang="pug">
.contact-page
  h1.title Contact me
  gc-line
  h4.content(
    v-html="content"
  )
  .way
    h4.title Email
    p.content {{email}}
  .way
    h4.title Phone
    p.content {{phone}}
  .way
    h4.title Address
    p.content {{address}}
  .link.global-fade-in
    a(href="https://www.facebook.com/zhuohao.zhang.520" target="_blank")
      svg.icon.facebook(
        aria-hidden="true"
      )
        use(xlink:href="#icon-facebook")
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
  gc-copyright.copyright
</template>


<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import contact from "@/data/contact";
import MyMixin from "@/mixin";

@Component
export default class Contact extends Mixins(MyMixin) {
  content: string = contact.content;
  email: string = contact.email;
  phone: string = contact.phone;
  address: string = contact.address;

  mounted() {
    this.inView();
  }
}
</script>

<style lang="stylus" scoped>
.contact-page
  line-height 2
  text-align left
  color #c5e5ff

  >.title
    margin-right 5%
    margin-bottom 20px
    line-height 1
    @media screen and (max-width : 420px)
      margin 0 auto
      margin-bottom 20px
      height auto
      text-align center

  >.content
    width 50%
    min-width 380px
    text-align left
    text-indent 0
    color white
    @media screen and (max-width : 420px)
      width 100%
      min-width 0

  >.way
    width 100%

  >.way >.title
    margin 4px

  >.way >.content
    margin 4px

  >.link
    margin-right 0
    margin-left auto
    text-align right
    @media screen and (max-width : 420px)
      margin 10px auto
      text-align center

  >.link .facebook
    margin-right 10px
    width 32px
    height 32px
    color #c5e5ff

  >.link .github
    margin-right 10px
    width 32px
    height 32px
    color #c5e5ff

  >.link .linkedin
    width 32px
    height 32px
    color #c5e5ff

//as homepage component
.home-contact
  >.title
    text-align right
    margin-right 0
    @media screen and (max-width : 420px)
      margin 0 auto
      margin-bottom 20px
      height auto
      text-align center

  >.content
    margin-right 0
    margin-left auto
    text-align right
    @media screen and (max-width : 420px)
      margin 0 auto
      width 100%
      min-width 0
      text-align left

  >.copyright
    display none
</style>
