import {
  gsap
} from "gsap";
import {
  flsModules
} from "./modules.js";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";

gsap.registerPlugin(MorphSVGPlugin);

export function menuBulge_open(delay) {
  gsap.to(wiper, {
    morphSVG: "M0 1088V0C0 0 65 317.333 65 543.37C65 769.407 0 1088 0 1088Z",
    duration: 0.5,
    delay: delay,
  });
}

export function menuBulge_close() {
  gsap.to(wiper, {
    morphSVG: "M 0 1088 V 0 C 0 0 0 317.333 0 543.37 C 0 757 0 1088 0 1088 Z",
    duration: 0.5,
  });
}

//get scroll value
flsModules.lenis.on("scroll", ({
  scroll,
  limit,
  velocity,
  direction,
  progress
}) => {
  // console.log({
  //   scroll,
  //   limit,
  //   velocity,
  //   direction,
  //   progress
  // })
});

const wiper = document.getElementById("wiper");

flsModules.lenis.on("scroll", function (e) {

  if (flsModules.lenis.direction = 1) {
    menuBulge_close();
    document.documentElement.classList.remove("menu-visible");
  }
  if (flsModules.lenis.scroll == 0) {
    menuBulge_open(0);
    document.documentElement.classList.add("menu-visible");
  } else {
    document.documentElement.classList.remove("menu-visible");
    document.documentElement.classList.remove("menu-hovered");
  }
});


document.addEventListener("mousemove", function (e) {
  if (e.x <= 64) {
    document.documentElement.classList.add("menu-hovered");
    flsModules.cursor.hide();
    flsModules.cursor.removeImg();
    if (flsModules.lenis.scroll > 0 && flsModules.lenis.velocity == 0) {
      menuBulge_open(0);
    }
  } else {
    if (flsModules.lenis.scroll > 0 && flsModules.lenis.velocity == 0) {
      menuBulge_close();
      document.documentElement.classList.remove("menu-hovered");
    }
  }
});