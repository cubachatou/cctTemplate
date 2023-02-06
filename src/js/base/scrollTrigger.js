import * as flsScroll from "../base/scroll/scroll.js";
import ScrollTrigger from "gsap/ScrollTrigger.js";

export function numbersCounter() {
  if (document.querySelector(".numbers")) {
    ScrollTrigger.create({
      trigger: ".numbers",
      start: "top bottom",
      once: true,
      onEnter: function () {
        flsScroll.digitsCounter();
      },
    });
    ScrollTrigger.update();
  }
}