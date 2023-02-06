import {
  flsModules
} from "./modules.js";
import Lenis from "@studio-freight/lenis";

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
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger)

if (document.querySelectorAll("[data-digits-counter]").length) {
  document.querySelectorAll("[data-digits-counter]").forEach((element) => {
    element.dataset.digitsCounter = element.innerHTML;
    element.innerHTML = `0`;
  });
}

// Функція ініціалізації
function digitsCountersInit(digitsCountersItems) {
  let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
  if (digitsCounters.length) {
    digitsCounters.forEach((digitsCounter) => {
      digitsCountersAnimate(digitsCounter);
    });
  }
}
// Функція анімації
function digitsCountersAnimate(digitsCounter) {
  let startTimestamp = null;
  const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000;
  const startValue = parseInt(digitsCounter.dataset.digitsCounter);
  const startPosition = 0;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function digitsCounterAction(e) {
  if (e.querySelectorAll("[data-digits-counter]").length) {
    digitsCountersInit(e.querySelectorAll("[data-digits-counter]"));
  }
}

if (document.querySelector('.numbers')) {
  ScrollTrigger.create({
    trigger: '.numbers',
    once: true,
    onEnter: function () {
      digitsCounterAction(document.querySelector('.numbers'));
    }
  })
}