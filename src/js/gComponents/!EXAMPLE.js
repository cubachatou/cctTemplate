import {
  Component
} from 'gia';

export default class someName extends Component {
  mount() {
    console.log("Hello world!");
    // if (!document.documentElement.classList.contains('loading')) {
    //   window.addEventListener("load", function () {
    //     setTimeout(function () {
    //       document.documentElement.classList.add('loaded');
    //     }, 0);
    //   });
    // }
  }
}