import {
  gsap
} from "gsap";
import {
  flsModules
} from "./modules.js";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";

gsap.registerPlugin(MorphSVGPlugin);

document.documentElement.addEventListener("mousemove", function (e) {
  const wiper = document.getElementById("wiper");
  if (e.x <= 64) {
    document.documentElement.classList.add("menu-hovered");
    gsap.to(wiper, {
      morphSVG: "M0 1088V0C0 0 65 317.333 65 543.37C65 769.407 0 1088 0 1088Z",
      duration: 0.5,
    });
    flsModules.hide();
    flsModules.removeImg();
  } else {
    document.documentElement.classList.remove("menu-hovered");
    gsap.to(wiper, {
      morphSVG: "M 0 1088 V 0 C 0 0 0 317.333 0 543.37 C 0 757 0 1088 0 1088 Z",
      duration: 0.5,
    });
    if (e.target.classList.contains("fh-section")) {
      flsModules.show();
      flsModules.setImg("/images/svg/circle-path-group.svg");
    }
  }
});