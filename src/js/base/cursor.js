import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export const cursor = new MouseFollower({
  visible: false,
  skewingMedia: 0,
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