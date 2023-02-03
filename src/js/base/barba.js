import { flsModules } from "../base/modules.js";
import barba from "@barba/core";
import { gsap } from "gsap";
import { menuClose } from "./functions.js";

barba.init({
	views: [
		{
			namespace: "home",
			beforeEnter() {
				menuClose();
				flsModules.svgOverlay.close();
			},
			afterEnter() {},
		},
		{
			namespace: "contacts",
			beforeEnter() {
				menuClose();
				flsModules.svgOverlay.close();
			},
			afterEnter() {},
		},
	],
});
