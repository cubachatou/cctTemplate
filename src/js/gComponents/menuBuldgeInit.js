import {
  Component
} from 'gia';

import {
  gsap
} from "gsap";
import {
  flsModules
} from "../base/modules.js";
import {
  menuBulge_open,
  menuBulge_close
} from '../base/menu_bulge.js';

import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";
gsap.registerPlugin(MorphSVGPlugin);

export default class menuBuldgeInit extends Component {
  mount() {
    setTimeout(() => {
      document.documentElement.classList.add("menu-visible");
    }, 1000);
    menuBulge_open(1);

    flsModules.lenis.on("scroll", function (e) {

      if (flsModules.lenis.direction = 1) {
        menuBulge_close();
        document.documentElement.classList.remove("menu-visible");
      }
      if (flsModules.lenis.scroll == 0) {
        document.documentElement.classList.add("menu-visible");
        menuBulge_open(0);
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
  }
}