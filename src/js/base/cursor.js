import MouseFollower from "mouse-follower";
import gsap from "gsap";
import {
  flsModules
} from "./modules.js";

MouseFollower.registerGSAP(gsap);

export function cursorsInit() {
  try {
    flsModules.cursor = new MouseFollower({
      visible: true,
      skewingMedia: 0
    });
    const fhSection = document.querySelector(".fh-section");

    if (fhSection) {
      fhSection.addEventListener("mouseenter", () => {
        // flsModules.cursor.show();
        flsModules.cursor.setImg("/images/svg/circle-path-group.svg");
      });

      fhSection.addEventListener("mouseleave", () => {
        flsModules.cursor.removeImg();
        // flsModules.cursor.hide();
      });
    }

    const clients = document.querySelector('.clients');

    if (clients) {
      clients.addEventListener("mouseenter", () => {
        // flsModules.cursor.show();
        flsModules.cursor.addState("-spotlight");
      });
      clients.addEventListener("mouseleave", () => {
        // flsModules.cursor.hide();
        setTimeout(() => {
          flsModules.cursor.removeState("-spotlight");
        }, 250);
      });
    }

    // const test = document.querySelector('.page_contacts');

    // if (test) {
    //   flsModules.cursorTest = new MouseFollower({
    //     visible: true,
    //     skewingMedia: 0,
    //     container: document.querySelector(".-m-40"),
    //   });
    //   test.addEventListener("mouseenter", () => {
    //     flsModules.cursorTest.show();
    //     flsModules.cursorTest.addState("-test");
    //   });
    //   test.addEventListener("mouseleave", () => {
    //     flsModules.cursorTest.hide();
    //     setTimeout(() => {
    //       flsModules.cursorTest.removeState("-test");
    //     }, 250);
    //   });
    // }

  } catch (error) {
    console.error(error);
  }

}