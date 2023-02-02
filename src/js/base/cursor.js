import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export const cursor = new MouseFollower({
  visible: false,
  skewingMedia: 0,
  container: document.querySelector(".clients__inner"),
});

const el = document.querySelector(".fh-section");

el.addEventListener("mouseenter", () => {
  cursor.show();
  cursor.setImg("/images/svg/circle-path-group.svg");
});

el.addEventListener("mouseleave", () => {
  cursor.removeImg();
  cursor.hide();
});

document.querySelector(".clients").addEventListener("mouseenter", () => {
  cursor.show();
  cursor.addState("-exclusion");
});