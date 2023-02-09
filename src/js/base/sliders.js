import gsap from "gsap";
import Swiper, {
  Navigation,
  EffectCreative
} from "swiper";
import {
  flsModules
} from "./modules.js";

export function initSliders() {
  if (document.querySelector(".case-slider")) {
    new Swiper(".case-slider", {
      modules: [Navigation, EffectCreative],
      speed: 800,
      loop: true,
      loopedSlides: 2,
      allowTouchMove: false,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: ["0%", "-8%", 112],
          opacity: 0
        },
        next: {
          shadow: true,
          translate: ["0%", "8%", -112],
          opacity: 1
        },
      },

      navigation: {
        prevEl: ".case-slider__arrow_prev",
        nextEl: ".case-slider__arrow_next",
      },
    });
  }
  if (document.querySelector(".feedback-slider")) {
    new Swiper(".feedback-slider", {
      modules: [Navigation, EffectCreative],
      speed: 800,
      spaceBetween: 16,
      allowTouchMove: false,
      effect: "creative",
      creativeEffect: {
        limitProgress: 3,
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["calc(100% + 16px)", 0, 0],
        },
      },

      navigation: {
        prevEl: ".feedbacks__button_prev",
        nextEl: ".feedbacks__button_next",
      },
    });
  }
}

// function initSlidersScroll() {
//   let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
//   if (sliderScrollItems.length > 0) {
//     for (let index = 0; index < sliderScrollItems.length; index++) {
//       const sliderScrollItem = sliderScrollItems[index];
//       const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
//       const sliderScroll = new Swiper(sliderScrollItem, {
//         observer: true,
//         observeParents: true,
//         direction: "vertical",
//         slidesPerView: "auto",
//         freeMode: {
//           enabled: true,
//         },
//         scrollbar: {
//           el: sliderScrollBar,
//           draggable: true,
//           snapOnRelease: false,
//         },
//         mousewheel: {
//           releaseOnEdges: true,
//         },
//       });
//       sliderScroll.scrollbar.updateSize();
//     }
//   }
// }

window.addEventListener("DOMContentLoaded", function (e) {
  initSliders();
  //initSlidersScroll();
});