import {
  Component
} from 'gia';
import {
  menuInit
} from '../base/functions.js';

export default class menuFunctions extends Component {
  mount() {
    menuInit();
  }
}