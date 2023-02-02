import Swiper, {
  Navigation,
  EffectCreative
} from "swiper";

function initSliders() {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      modules: [Navigation, EffectCreative],
      speed: 800,
      loop: true,
      allowTouchMove: false,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
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