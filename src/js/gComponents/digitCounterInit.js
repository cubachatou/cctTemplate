import {
  Component
} from 'gia';

import * as flsScroll from "../base/scroll/scroll.js";
import ScrollTrigger from "gsap/ScrollTrigger.js";

export default class digitCounterInit extends Component {
  mount() {
    ScrollTrigger.create({
      trigger: ".numbers",
      start: "top bottom",
      once: true,
      onEnter: function () {
        console.log('ssss');
        flsScroll.digitsCounter();
      },
    });
    ScrollTrigger.update();
  }
}