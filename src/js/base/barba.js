import {
  flsModules
} from "../base/modules.js";
import {
  menuClose
} from "./functions.js";
import {
  initSliders
} from "./sliders.js";
import VanillaTilt from "vanilla-tilt";
import {
  cursorsInit
} from "./cursor.js";
import {
  menuBulge_open
} from "./menu_bulge.js";

import barba from "@barba/core";

barba.init({
  views: [{
      namespace: "home",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {

        flsModules.lenis.scrollTo(0, {
          immediate: true,
        });

        setTimeout(() => {
          document.documentElement.classList.add("menu-visible");
        }, 1000);

        cursorsInit();

        initSliders();

        VanillaTilt.init(document.querySelectorAll("[data-tilt]"))

        flsModules.select.selectsInit;

        menuBulge_open(1);
      },
    },
    {
      namespace: "portoflio",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {
        flsModules.lenis.scrollTo(0, {
          immediate: true,
        });
        cursorsInit();
        initSliders();
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"))
        flsModules.select.selectInit();
      },
    },
    {
      namespace: "about",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {
        flsModules.lenis.scrollTo(0, {
          immediate: true,
        });
        cursorsInit();
        initSliders();
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"))
        flsModules.select.selectInit();
      },
    },
    {
      namespace: "blog",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {
        flsModules.lenis.scrollTo(0, {
          immediate: true,
        });
        cursorsInit();
        initSliders();
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"))
        flsModules.select.selectInit();
      },
    },
    {
      namespace: "contacts",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {
        flsModules.lenis.scrollTo(0, {
          immediate: true,
        });
        cursorsInit();
        initSliders();
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"))
        flsModules.select.selectInit();
      },
    },
  ],
});