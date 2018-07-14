// @flow

import React, {Component} from 'react';
import {ItemList} from './subscribers/ListTodos';
import {FilterList} from './subscribers/ListTodos';
import {ButtonRandom} from './subscribers/ListTodos';
import {ModalProvider} from './modal/ModalContext';
import {ModalRoot} from './modal/ModalRoot';

type Props = {};

export class App extends Component<Props> {
  render() {
    return (
      <section className="todo" id="todo">
        <ModalProvider>
          <h1>TODO</h1>
          <FilterList />
          <ItemList />
          <ButtonRandom />
          <ModalRoot />
        </ModalProvider>
      </section>
    );
  }
}
