// @flow

import React, {Component} from 'react';
import {Todo} from '../types/types';
import {ItemToggle, ItemAdd} from '../subscribers/ListTodos';
type Props = {
  todos: Array<Todo>,
};

export class ListItems extends Component<Props> {
  render() {
    const todos = this.props.todos;
    return (
      <ul>
        {todos.map((todo, i, arr) => <ItemToggle key={todo.id} {...todo} last={arr.length - 1} />)}
        <ItemAdd />
      </ul>
    );
  }
}
