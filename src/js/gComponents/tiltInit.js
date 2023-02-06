import {
  Component
} from 'gia';
import VanillaTilt from 'vanilla-tilt';

export default class tiltInit extends Component {
  mount() {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"))
  }
}