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
  document.body.classList.remove("no-transition")
})

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