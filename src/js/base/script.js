// Підключення функціоналу "Чертоги Фрілансера"
import {
  isMobile,
  menuClose
} from "./functions.js";
// Підключення списку активних модулів
import {
  flsModules
} from "./modules.js";

//================================
window.addEventListener("load", function () {
  document.body.classList.remove("no-transition");
});

//================================
document.addEventListener("click", function (e) {
  if (e.target.closest("[data-menu-close]")) {
    menuClose();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menuClose();
  }
});
document.addEventListener("mouseover", function (e) {
  const gradientMenu = document.querySelector(".gradient-menu");
  e.target.closest(".menu-gradient-red") ? gradientMenu.classList.add("menu-gradient-red") : gradientMenu.classList.remove("menu-gradient-red");
  e.target.closest(".menu-gradient-blue") ? gradientMenu.classList.add("menu-gradient-blue") : gradientMenu.classList.remove("menu-gradient-blue");
  e.target.closest(".menu-gradient-purple") ? gradientMenu.classList.add("menu-gradient-purple") : gradientMenu.classList.remove("menu-gradient-purple");
});
//================================================================