import MouseFollower from "mouse-follower";
import gsap from "gsap";
import {
  flsModules
} from "./modules.js";

MouseFollower.registerGSAP(gsap);

flsModules.cursor = new MouseFollower({
  visible: false,
  skewingMedia: 0
});

export function cursorsInit() {
  const fhSection = document.querySelector(".fh-section");

  if (fhSection) {
    fhSection.addEventListener("mouseenter", () => {
      flsModules.cursor.show();
      flsModules.cursor.setImg("/images/svg/circle-path-group.svg");
    });

    fhSection.addEventListener("mouseleave", () => {
      flsModules.cursor.removeImg();
      flsModules.cursor.hide();
    });
  }

  const clients = document.querySelector('.clients');

  if (clients) {
    clients.addEventListener("mouseover", () => {
      flsModules.cursor.show();
      flsModules.cursor.addState("-spotlight");
    });
    clients.addEventListener("mouseleave", () => {
      flsModules.cursor.hide();
      setTimeout(() => {
        flsModules.cursor.removeState("-spotlight");
      }, 250);
    });
  }
}