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
      namespace: "contacts",
      beforeLeave() {
        menuClose();
        flsModules.svgOverlay.invert();
      },
      afterEnter() {},
    },
  ],
});