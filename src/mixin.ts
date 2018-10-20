import inView from "in-view";

const mixin = {
  methods: {
    inView() {
      inView(".global-fade-in").on("enter", (ele: HTMLElement) => {
        ele.style.animationName = "globalFadeIn";
        ele.style.animationDuration = "2s";
        ele.style.visibility = "visible";

        // ele.classList.remove('global-fade-in')
      });
    }
  }
};

export default mixin;
