import {
  flsModules
} from "../base/modules.js";
import barba from "@barba/core";
import {
  menuClose
} from "./functions.js";

barba.init({
  views: [{
      namespace: "home",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
    {
      namespace: "portoflio",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
    {
      namespace: "about",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
    {
      namespace: "blog",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
    {
      namespace: "contacts",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
  ],
});