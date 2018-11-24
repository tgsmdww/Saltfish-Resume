<template lang="pug">
a.link(
  :href="href"
  :target="_blank"
) [{{name}}]
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class gcLink extends Vue {
  @Prop(String)
  href!: string;
  @Prop(String)
  name!: string;
}
</script>

<style lang="stylus" scoped>
.link
  font-size 14px
</style>
