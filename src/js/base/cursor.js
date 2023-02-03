import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export const cursor = new MouseFollower({
  visible: false,
  skewingMedia: 0
});

const fhSection = document.querySelector(".fh-section");

if (fhSection) {
  fhSection.addEventListener("mouseenter", () => {
    cursor.show();
    cursor.setImg("/images/svg/circle-path-group.svg");
  });

  fhSection.addEventListener("mouseleave", () => {
    cursor.removeImg();
    cursor.hide();
  });
}

const clients = document.querySelector('.clients');

if (clients) {
  clients.addEventListener("mouseover", () => {
    cursor.show();
    cursor.addState("-spotlight");
  });
  clients.addEventListener("mouseleave", () => {
    cursor.hide();
    setTimeout(() => {
      cursor.removeState("-spotlight");
    }, 250);
  });
}