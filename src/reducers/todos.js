// @flow
import {Todo, Action} from '../types/types';
import {ACTIONS, OBJECTS} from '../constants/constants';
import {capitalize} from '../constants/utils';
const todos = (
  state: Array<Todo> = [
    {
      doneAt: null,
      id: 0,
      text: 'boo',
    },
  ],
  action: Action
) => {
  let todo = state[action.id] || {};
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          doneAt: null,
        },
      ];
    case 'COMPLETE':
      todo.doneAt ? (todo.doneAt = null) : (todo.doneAt = new Date());
      return [...state];
    case 'EDIT':
      todo = {...todo, text: action.text};
      state[action.id] = todo;
      return [...state];
    case 'EDIT_MODE':
      todo.beingEdited = !todo.beingEdited;
      return [...state];
    case 'RANDOM':
      const r1 = Math.floor(Math.random() * ACTIONS.length);
      const r2 = Math.floor(Math.random() * OBJECTS.length);
      return [
        ...state,
        {
          id: state.length,
          text: `${capitalize(ACTIONS[r1])} ${OBJECTS[r2]}`,
          doneAt: null,
        },
      ];
    default:
      return state;
  }
};

export default todos;
