<template lang="pug">
.home-page
  .introduction
    information
    .line
    avatar
  .container
    Profile.home-profile
    //- Portfolio.home-portfolio
    Contact.home-contact
  gc-copyright
</template>

<script lang="ts">
import { Component, Vue, Mixins } from "vue-property-decorator";
import Information from "./Information.vue";
import Avatar from "./Avatar.vue";
import Profile from "@/views/Profile/index.vue";
// import Portfolio from "@/views/Portfolio/index.vue";
import Contact from "@/views/Contact/index.vue";
import MyMixin from "@/mixin";

@Component({
  components: {
    Information,
    Avatar,
    // Portfolio,
    Profile,
    Contact
  }
})
export default class Home extends Mixins(MyMixin) {
  mounted() {
    this.inView();
  }
}
</script>

<style lang="stylus" scoped>
.home-page
  margin 0 !important
  color #c5e5ff
  >.introduction
    display flex
    flex-wrap nowrap
    justify-content center
    align-items center
    height 380px
    margin 0 auto
    padding-bottom 50px
    text-align center

    @media screen and (max-width : 900px)
      flex-wrap wrap
      height auto
      padding 0



    >.line
      margin 0 65px 0 60px
      width 1px
      height 100%
      background-color rgba(255,255,255,.5)

      @media screen and (max-width : 900px)
        display none

  >.container
    margin 0 10%

    // >.home-portfolio
    //   margin-top 75px
    >.home-profile
    >.home-contact
      margin-top 100px
</style>
