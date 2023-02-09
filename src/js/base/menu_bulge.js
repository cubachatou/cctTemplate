import {
  gsap
} from "gsap";
import {
  flsModules
} from "./modules.js";
import MorphSVGPlugin from "gsap/MorphSVGPlugin.js";

gsap.registerPlugin(MorphSVGPlugin);

class MenuBulge {
  constructor(options) {
    let config = {
      classes: {
        visible: 'menu-visible',
        hovered: 'menu-hovered'
      },
      states: {
        isSvg_Open: false,
        visible: false,
        hovered: false,
        pageAt_Top: true,
      }
    }
    this.target = document.getElementById("wiper");
    this.options = {
      ...config,
      ...options,
      classes: {
        ...config.classes,
      },
    }
  }
  open(duration = 0.5, delay = 0) {
    if (!this.options.states.isSvg_Open) {
      gsap.to(this.target, {
        morphSVG: "M0 1088V0C0 0 65 317.333 65 543.37C65 769.407 0 1088 0 1088Z",
        duration: duration,
        delay: delay,
      });
      this.options.states.isSvg_Open = true;
    }
  }
  close(duration = 0.5, delay = 0) {
    if (this.options.states.isSvg_Open) {
      gsap.to(this.target, {
        morphSVG: "M 0 1088 V 0 C 0 0 0 317.333 0 543.37 C 0 757 0 1088 0 1088 Z",
        duration: duration,
        delay: delay
      });
      this.options.states.isSvg_Open = false;
    }
  }
  visibility_ON() {
    document.documentElement.classList.add(this.options.classes.visible);
    this.options.states.visibility = false ? this.options.states.visibility = true : null;
  }
  visibility_OFF() {
    document.documentElement.classList.remove(this.options.classes.visible);
    this.options.states.visibility = true ? this.options.states.visibility = false : null;
  }
  hover_ON() {
    document.documentElement.classList.add(this.options.classes.hovered);
    this.options.states.hovered = false ? this.options.states.hovered = true : null;
  }
  hover_OFF() {
    document.documentElement.classList.remove(this.options.classes.hovered);
    this.options.states.hovered = true ? this.options.states.hovered = false : null;
  }
}

try {

  flsModules.menuBulge = new MenuBulge({})

  let page_atTop = true;
  let cursor_atLeft = null;

  if (flsModules.lenis.scroll === 0) {
    setTimeout(() => {
      flsModules.menuBulge.open();
      flsModules.menuBulge.visibility_ON();
    }, 700);
  }

  flsModules.lenis.on("scroll", function (e) {
    let cursorY = document.querySelector(".mf-cursor").getBoundingClientRect().y;
    if (e.scroll > 50) {
      if (!cursor_atLeft) {
        flsModules.menuBulge.close();
        flsModules.menuBulge.visibility_OFF();
      }
      page_atTop = false;
    } else {
      flsModules.menuBulge.open();
      flsModules.menuBulge.visibility_ON();
      page_atTop = true;
      if (e.direction === 1) {
        if (e.scroll < 50 && !cursor_atLeft) {
          flsModules.menuBulge.close();
          flsModules.menuBulge.visibility_OFF();
        } else {
          gsap.to(menuBulgeSvg, {
            top: cursorY,
            y: "-480",
          })
          gsap.to(burgerIcon, {
            top: cursorY,
            y: "-50%",
          })
        }

      } else {
        gsap.to(menuBulgeSvg, {
          top: 0,
          y: 0,
        })
        gsap.to(burgerIcon, {
          top: "50%",
          y: 0,
        })
      }
    }
  });

  const menuBulgeSvg = document.querySelector(".MenuBulge");
  const burgerIcon = document.querySelector(".icon-menu");

  document.addEventListener("mousemove", function (e) {
    if (e.x <= 64) {
      flsModules.menuBulge.open();
      flsModules.menuBulge.hover_ON();
      cursor_atLeft = true;
    } else if (e.x > 64) {
      cursor_atLeft = false;
      if (page_atTop) {
        flsModules.menuBulge.hover_OFF();
      }
      if (!page_atTop) {
        flsModules.menuBulge.close();
        flsModules.menuBulge.hover_OFF();
      }
    }

    if (!page_atTop) {
      gsap.to(menuBulgeSvg, {
        top: e.clientY,
        y: "-480",
      })
      gsap.to(burgerIcon, {
        top: e.clientY,
        y: "-50%",
      })
    }
  })

} catch (error) {
  console.error(error);
}