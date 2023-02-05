// SVG WAVE
import {
  flsModules
} from "../base/modules.js";

const ease = {
  exponentialIn: (t) => {
    return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
  },
  exponentialOut: (t) => {
    return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
  },
  exponentialInOut: (t) => {
    return t == 0.0 || t == 1.0 ? t : t < 0.5 ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0) : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
  },
  sineOut: (t) => {
    const HALF_PI = 1.5707963267948966;
    return Math.sin(t * HALF_PI);
  },
  circularInOut: (t) => {
    return t < 0.5 ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t)) : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
  },
  cubicIn: (t) => {
    return t * t * t;
  },
  cubicOut: (t) => {
    const f = t - 1.0;
    return f * f * f + 1.0;
  },
  cubicInOut: (t) => {
    return t < 0.5 ? 4.0 * t * t * t : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
  },
  quadraticOut: (t) => {
    return -t * (t - 2.0);
  },
  quarticOut: (t) => {
    return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
  },
};

class ShapeOverlays {
  constructor(elm) {
    this.elm = elm;
    this.path = elm.querySelectorAll("path");
    this.numPoints = 6;
    this.duration = 600;
    this.delayPointsArray = [];
    this.delayPointsMax = 170;
    this.delayPerPath = 60;
    this.timeStart = Date.now();
    this.isOpened = false;
    this.isInvert = false;
    this.isAnimating = false;
  }
  toggle() {
    this.isAnimating = true;
    const range = Math.random() * Math.PI * 2;
    for (var i = 0; i < this.numPoints; i++) {
      const radian = (i / (this.numPoints - 1)) * Math.PI * 2;
      this.delayPointsArray[i] = ((Math.sin(radian + range) + 1) / 2) * this.delayPointsMax;
    }
    if (this.isOpened === false) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.isInvert = false;
    this.isOpened = true;
    this.elm.classList.add("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  close() {
    this.isInvert = false;
    this.isOpened = false;
    this.elm.classList.remove("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  invert() {
    this.isInvert = true;
    this.isOpened = false;
    this.elm.classList.remove("is-opened");
    this.timeStart = Date.now();
    this.renderLoop();
  }
  updatePath(time) {
    const points = [];
    if (this.isOpened || this.isInvert) {
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
      }
    }
    if (!this.isOpened && !this.isInvert) {
      for (var i = 0; i < this.numPoints; i++) {
        points[i] = 100 - ease.cubicInOut(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100;
      }
    }

    let str = "";

    str += this.isOpened ? `M ${points[0]} 0 ` : `M 0 0 H ${points[0]} `;

    for (var i = 0; i < this.numPoints - 1; i++) {
      const p = ((i + 1) / (this.numPoints - 1)) * 100;
      const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
      str += `C ${points[i]} ${cp} ${points[i + 1]} ${cp} ${points[i + 1]} ${p} `;
    }

    this.isInvert ? str += `H 100 V 0` : str += `H 0 V 0`;
    return str;
  }
  render() {
    if (this.isOpened) {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
      }
    } else {
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
      }
    }
  }
  renderLoop() {
    this.render();
    if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
      requestAnimationFrame(() => {
        this.renderLoop();
      });
    } else {
      this.isAnimating = false;
    }
  }
}

const elmHamburger = document.querySelector(".icon-menu");
const elmOverlay = document.querySelector(".shape-overlays");
flsModules.svgOverlay = new ShapeOverlays(elmOverlay);

elmHamburger.addEventListener("click", () => {
  if (flsModules.svgOverlay.isAnimating) {
    return false;
  }
  flsModules.svgOverlay.toggle();
});

document.addEventListener("click", function (e) {
  if (e.target.closest("[data-menu-close]")) {
    flsModules.svgOverlay.close();
  }
  if (e.target.closest(".header-menu__link")) {
    flsModules.svgOverlay.invert();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    flsModules.svgOverlay.close();
  }
});