import {
  gsap
} from "gsap";
import {
  flsModules
} from "./modules.js";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";

gsap.registerPlugin(MorphSVGPlugin);

class MenuBulge {
  constructor(options) {
    let config = {
      classes: {
        visible: 'menu-visible',
        hovered: 'menu-hovered'
      },
      states: {
        isSvg_Open: false,
        visible: false,
        hovered: false,
        pageAt_Top: true,
      }
    }
    this.target = document.getElementById("wiper");
    this.options = {
      ...config,
      ...options,
      classes: {
        ...config.classes,
      },
    }
  }
  open(duration = 0.5, delay = 0) {
    if (!this.options.states.isSvg_Open) {
      gsap.to(this.target, {
        morphSVG: "M0 1088V0C0 0 65 317.333 65 543.37C65 769.407 0 1088 0 1088Z",
        duration: duration,
        delay: delay,
      });
      this.options.states.isSvg_Open = true;
    }
  }
  close(duration = 0.5, delay = 0) {
    if (this.options.states.isSvg_Open) {
      gsap.to(this.target, {
        morphSVG: "M 0 1088 V 0 C 0 0 0 317.333 0 543.37 C 0 757 0 1088 0 1088 Z",
        duration: duration,
        delay: delay
      });
      this.options.states.isSvg_Open = false;
    }
  }
  visibility_ON() {
    document.documentElement.classList.add(this.options.classes.visible);
    this.options.states.visibility = false ? this.options.states.visibility = true : null;
  }
  visibility_OFF() {
    document.documentElement.classList.remove(this.options.classes.visible);
    this.options.states.visibility = true ? this.options.states.visibility = false : null;
  }
  hover_ON() {
    document.documentElement.classList.add(this.options.classes.hovered);
    this.options.states.hovered = false ? this.options.states.hovered = true : null;
  }
  hover_OFF() {
    document.documentElement.classList.remove(this.options.classes.hovered);
    this.options.states.hovered = true ? this.options.states.hovered = false : null;
  }
}

flsModules.menuBulge = new MenuBulge({})

let page_atTop = true;

setTimeout(() => {
  flsModules.menuBulge.open();
  flsModules.menuBulge.visibility_ON();
}, 700);

flsModules.lenis.on("scroll", function (e) {

  page_atTop = flsModules.menuBulge.options.states.pageAt_Top;

  flsModules.lenis.scroll > 100 ? page_atTop = false : page_atTop = true;

  if (flsModules.lenis.direction = 1) {
    flsModules.menuBulge.close();
    flsModules.menuBulge.visibility_OFF();
  }

  if (page_atTop && flsModules.lenis.velocity === 0) {
    flsModules.menuBulge.open();
    flsModules.menuBulge.visibility_ON();
  }
});

document.addEventListener("mousemove", function (e) {
  if (e.x <= 64) {
    flsModules.menuBulge.open();
    flsModules.menuBulge.hover_ON();
  } else if (e.x > 64) {
    if (page_atTop) {
      flsModules.menuBulge.hover_OFF();
    }
    if (!page_atTop) {
      flsModules.menuBulge.close();
      flsModules.menuBulge.hover_OFF();
    }
  }
})