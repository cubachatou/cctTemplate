import {
  flsModules
} from "./modules.js";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

flsModules.lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

//get scroll value
flsModules.lenis.on("scroll", ({
  scroll,
  limit,
  velocity,
  direction,
  progress
}) => {
  // ScrollTrigger.update();
  // console.log({
  //   scroll,
  //   limit,
  //   velocity,
  //   direction,
  //   progress
  // })
});

function raf(time) {
  flsModules.lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);