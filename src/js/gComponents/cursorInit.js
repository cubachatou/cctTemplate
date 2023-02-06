import {
  Component
} from 'gia';

import {
  cursorsInit
} from '../base/cursor.js';

export default class cursorInit extends Component {
  mount() {
    cursorsInit();
  }
}