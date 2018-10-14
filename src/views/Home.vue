<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  Hello(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello from "@/components/Hello.vue"; // @ is an alias to /src

@Component({
  components: {
    Hello
  }
})
export default class Home extends Vue {}
</script>
