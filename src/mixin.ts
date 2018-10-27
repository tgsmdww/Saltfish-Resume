// mixin.js
import Vue from "vue";
import Component from "vue-class-component";
import inView from "in-view";

// You can declare a mixin as the same style as components.
@Component
export default class MyMixin extends Vue {
  inView() {
    inView(".global-fade-in").on("enter", (ele: HTMLElement) => {
      ele.style.animationName = "globalFadeIn";
      ele.style.animationDuration = "1s";
      ele.style.visibility = "visible";

      // ele.classList.remove('global-fade-in')
    });
  }
}
