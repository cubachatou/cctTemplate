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
document.addEventListener("mouseover", function (e) {
  const gradientMenu = document.querySelector('.gradient-menu');
  e.target.closest(".menu-gradient-red") ? gradientMenu.classList.add("menu-gradient-red") : gradientMenu.classList.remove("menu-gradient-red");
  e.target.closest(".menu-gradient-blue") ? gradientMenu.classList.add("menu-gradient-blue") : gradientMenu.classList.remove("menu-gradient-blue");
  e.target.closest(".menu-gradient-purple") ? gradientMenu.classList.add("menu-gradient-purple") : gradientMenu.classList.remove("menu-gradient-purple");
});
//================================================================

window.onload = () => {
  const sliderImagesBox = document.querySelectorAll('.case-slider');
  const sliderImageControls = document.querySelector('.case-slider__controls');
  const sliderImagePrev = document.querySelector('.case-slider__arrow_prev');
  const sliderImageNext = document.querySelector('.case-slider__arrow_next');
  sliderImagesBox.forEach(el => {
    let imageNodes = el.querySelectorAll('.case-slider__item')
    let arrIndexes = []; // Index array
    (() => {
      // The loop that added values to the arrIndexes array for the first time
      let start = 0;
      while (imageNodes.length > start) {
        arrIndexes.push(start++);
      }
    })();

    console.log(arrIndexes);

    let setIndex = (arr) => {
      for (let i = 0; i < imageNodes.length; i++) {
        imageNodes[i].dataset.slide = arr[i] // Set indexes
      }
    }
    sliderImageNext.addEventListener('click', () => {
      arrIndexes.unshift(arrIndexes.pop());
      setIndex(arrIndexes)
    })
    sliderImagePrev.addEventListener('click', () => {
      arrIndexes.push(arrIndexes.shift());
      setIndex(arrIndexes)
    })
    setIndex(arrIndexes) // The first indexes addition
  });
};

//================================================================

function formatPoints(points, close) {
  points = [...points];
  // so that coords can be passed as objects or arrays
  if (!Array.isArray(points[0])) {
    points = points.map(({
      x,
      y
    }) => [x, y]);
  }

  if (close) {
    const lastPoint = points[points.length - 1];
    const secondToLastPoint = points[points.length - 2];

    const firstPoint = points[0];
    const secondPoint = points[1];

    points.unshift(lastPoint);
    points.unshift(secondToLastPoint);

    points.push(firstPoint);
    points.push(secondPoint);
  }

  return points.flat();
}

function spline(points = [], tension = 1, close = false, cb) {
  points = formatPoints(points, close);

  const size = points.length;
  const last = size - 4;

  const startPointX = close ? points[2] : points[0];
  const startPointY = close ? points[3] : points[1];

  let path = "M " + `${startPointX} ${startPointY}`;

  cb && cb("MOVE", [startPointX, startPointY]);

  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? points[i - 2] : points[0];
    const y0 = i ? points[i - 1] : points[1];

    const x1 = points[i + 0];
    const y1 = points[i + 1];

    const x2 = points[i + 2];
    const y2 = points[i + 3];

    const x3 = i !== last ? points[i + 4] : x2;
    const y3 = i !== last ? points[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += " C " + `${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`;

    cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }

  return path;
}

import {
  createNoise2D
} from 'simplex-noise';
import {
  gsap
} from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";
gsap.registerPlugin(MorphSVGPlugin);

// our <path> element
const path = document.querySelector(".circle-path");

let hueNoiseOffset = 0;
let noiseStep = 0.008;

const noise2D = createNoise2D();

const points = createPoints();

let requestAnimationFrameID = null;

function animate() {
  path.setAttribute("d", spline(points, 1, true));

  // // for every point...
  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
    const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
    const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
    // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
    const x = map(nX, -1, 1, point.originX - 5, point.originX + 5);
    const y = map(nY, -1, 1, point.originY - 5, point.originY + 5);

    // update the point's current coordinates
    point.x = x;
    point.y = y;

    // progress the point's x, y values through "time"
    point.noiseOffsetX += noiseStep;
    point.noiseOffsetY += noiseStep;
  }

  const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
  const hue = map(hueNoise, -1, 1, 0, 360);

  hueNoiseOffset += noiseStep / 6;

  requestAnimationFrameID = requestAnimationFrame(animate);
};

const test = document.querySelector('.case-slider__arrow_prev');

gsap.to(path, {
  transition: "all .1s ease 0"
});

test.addEventListener("mouseenter", function (e) {
  gsap.to(path, {
    transition: "all 0s ease 0",
  });
  animate()
});
test.addEventListener("mouseleave", function (e) {
  cancelAnimationFrame(requestAnimationFrameID)
  gsap.to(path, {
    morphSVG: "M 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503 C 76.2234 78.5833 67.291 85.073 58.9058 87.7975 C 50.5205 90.5221 39.4795 90.5221 31.0942 87.7975 C 22.709 85.073 13.7766 78.5833 8.5942 71.4503 C 3.4119 64.3174 0 53.8168 0 45 C 0 36.1832 3.4119 25.6826 8.5942 18.5497 C 13.7766 11.4167 22.709 4.927 31.0942 2.2025 C 39.4795 -0.5221 50.5205 -0.5221 58.9058 2.2025 C 67.291 4.927 76.2234 11.4167 81.4058 18.5497 C 86.5881 25.6826 90 36.1832 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503",
    duration: 0.3,
    transition: "all .1s ease 0"
  });
});

function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function noise(x, y) {
  return noise2D(x, y);
}

function createPoints() {
  const points = [];
  // how many points do we need
  const numPoints = 10;
  // used to equally space each point around the circle
  const angleStep = (Math.PI * 2) / numPoints;
  // the radius of the circle
  const rad = 45;

  for (let i = 1; i <= numPoints; i++) {
    // x & y coordinates of the current point
    const theta = i * angleStep;

    const x = 45 + Math.cos(theta) * rad;
    const y = 45 + Math.sin(theta) * rad;

    // store the point's position
    points.push({
      x: x,
      y: y,
      // we need to keep a reference to the point's original point for when we modulate the values later
      originX: x,
      originY: y,
      // more on this in a moment!
      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000
    });
  }

  return points;
}