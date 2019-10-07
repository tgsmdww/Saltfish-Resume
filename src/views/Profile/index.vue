<template lang="pug">
.profile-page
  h1.head Profile
  gc-line
  p.content(
    v-html = "content"
  )
  .theme
    h2.title - Research Interests -
    profile-wrap(
      v-for="(item, i) in interests"
      :key="i"
      :title="item.title"
      :content2="item.content"
    )

  .theme
    h2.title - Publications (Including Technical Reports) -
    profile-wrap(
      v-for="(item, i) in publications"
      :key="i"
      :title="item.title"
      :content1="item.authors"
      :content2="item.source"
    )

  .theme
    h2.title - Talks -
    profile-wrap(
      v-for="(item, i) in talks"
      :key="i"
      :title="item.time"
      :content1="item.content1"
      :content2="item.content2"
    )

  .theme
    h2.title - Experiences -
    experience-wrap(
      v-for="(item, i) in experiences"
      :key="i"
      :pic="item.src"
      :time="item.time"
      :name="item.title"
      :content="item.content"
    )

  .theme
    h2.title  - About me -
    ul.list
      li.item(
        v-for="(item,i) in aboutme"
        :key="i"
      ) {{item.content}}
  gc-copyright.copyright
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExperienceWrap from "./ExperienceWrap.vue";
import ProfileWrap from "./ProfileWrap.vue";

import introduction from "@/data/mainintro";
import {
  researchInterests,
  publications,
  talks,
  experiences,
  aboutme
} from "@/data/profile";

@Component({
  components: {
    ExperienceWrap,
    ProfileWrap
  }
})
export default class Profile extends Vue {
  content: string = introduction.content;
  interests: object[] = researchInterests;
  publications: object[] = publications;
  talks: object[] = talks;
  experiences: object[] = experiences;
  aboutme: object[] = aboutme;
}
</script>

<style lang="stylus" scoped>
.profile-page
  text-align left
  color #c5e5ff

  >.head
    margin-bottom 20px
    @media screen and (max-width : 420px)
      margin-top 50px
      text-align center

  >.content
    margin-left 1em
    line-height 2
    color white
    margin-bottom 70px

  >.theme
    margin-bottom 70px
    >.list >.item
      margin-bottom 10px
      line-height 2
      color white

//as homepage component
.home-profile
  >.content
    display none

  >.copyright
    display none
</style>
