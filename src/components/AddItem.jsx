// @flow

import React, {Component} from 'react';

type Props = {
  addItem: (text: string) => void,
};

export class AddItem extends Component<Props> {
  addNew = (e: SyntheticEvent<HTMLInputElement> | SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.type === 'keypress' && e.key !== 'Enter') return;
    if (e.currentTarget.value) {
      this.props.addItem(e.currentTarget.value.trim());
      e.currentTarget.value = '';
      e.currentTarget.blur();
    }
  };
  render() {
    return (
      <li>
        <div className="wrapper">
          <input id="add" type="checkbox" />
          <label id="addlabel" htmlFor="add">
            <span />
          </label>
          <input id="addinput" type="text" onBlur={this.addNew} onKeyPress={this.addNew} />
        </div>
      </li>
    );
  }
}
