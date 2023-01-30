// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// CURSOR
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(MorphSVGPlugin);

const cursor = new MouseFollower({
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

//================================
document.documentElement.addEventListener("mousemove", function (e) {
	const wiper = document.getElementById("wiper");
	if (e.x <= 64 || e.x >= window.screen.width - 64 || e.y <= 64) {
		document.documentElement.classList.add("menu-hovered");
		gsap.to(wiper, {
			morphSVG: "M0 1088V0C0 0 65 317.333 65 543.37C65 769.407 0 1088 0 1088Z",
			duration: 0.5,
		});
		cursor.hide();
		cursor.removeImg();
	} else {
		document.documentElement.classList.remove("menu-hovered");
		gsap.to(wiper, {
			morphSVG: "M 0 1088 V 0 C 0 0 0 317.333 0 543.37 C 0 757 0 1088 0 1088 Z",
			duration: 0.5,
		});
		if (e.target.classList.contains("fh-section")) {
			cursor.show();
			cursor.setImg("/images/svg/circle-path-group.svg");
		}
	}
});
