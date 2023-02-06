import {
  Component
} from 'gia';
import {
  menuInit
} from '../base/functions.js';

export default class overlayMenuInit extends Component {
  mount() {
    menuInit();
  }
}