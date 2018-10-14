<template lang="pug">
.hello
  h1 {{ msg }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Hello extends Vue {
  @Prop()
  msg!: string;
}
</script>

<style lang="stylus" scoped>

</style>
