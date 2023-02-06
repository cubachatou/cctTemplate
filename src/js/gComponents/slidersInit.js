import {
  Component
} from 'gia';
import {
  initSliders
} from '../base/sliders.js';

export default class slidersInit extends Component {
  mount() {
    initSliders();
  }
}