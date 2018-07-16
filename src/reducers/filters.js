// @flow
import {Action} from '../types/types';

const filters = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      return !state;
    default:
      return state;
  }
};

export default filters;
