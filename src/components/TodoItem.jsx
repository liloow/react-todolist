// @flow

import React, {Component} from 'react';
import {Todo} from '../types/types';
import {ModalConsumer} from '../modal/ModalContext';
import {TodoModal} from '../subscribers/ListTodos';

type Props = {
  ...Todo,
  toggleItem: number => void,
};

export class TodoItem extends Component<Props> {
  onClickLabel = async (e: MouseEvent) => {
    const checkbox = document.querySelector(`input#item${this.props.id}`);
    if (checkbox instanceof HTMLInputElement) checkbox.checked = !checkbox.checked;
    await new Promise(resolve => setTimeout(resolve, 1200));
    this.props.toggleItem(this.props.id);
  };

  render() {
    const {text, id, last, doneAt, filter} = this.props;
    setTimeout(() => {
      // Hack for strikethrough not to execute upon insert
      if (last !== id) return;
      let fresh = document.querySelector(`.fresh`);
      if (fresh) fresh.className = 'strikethrough';
    });
    return (
      <li>
        <div className="wrapper">
          <input id={`item${id}`} type="checkbox" defaultChecked={!!doneAt} />
          <label onClick={this.onClickLabel} htmlFor={id}>
            <span />
          </label>
          <ModalConsumer>
            {({showModal}) => (
              <div className="wrapper" onClick={() => showModal(TodoModal, {...this.props, id})}>
                <span className={`strikethrough${last === id ? ' fresh' : ''}`}>{text}</span>
              </div>
            )}
          </ModalConsumer>
          {filter && doneAt && <div className="wrapper date">{doneAt.toLocaleString()}</div>}
        </div>
      </li>
    );
  }
}
