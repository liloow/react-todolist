// @flow

import React, {Component} from 'react';
import ReacDOM from 'react-dom';
import {Todo} from '../types/types';
import {getCat64} from '../api/api';

const modalRoot: ?HTMLElement = document.getElementById('modal-root');

type Props = {
  getCat: void => void,
  onRequestClose: Function,
  ...Todo,
};

export class ModalTodo extends Component<Props> {
  async componentDidMount() {
    let pic = await getCat64();
    this.props.fetchCat(pic);
  }
  close = (e: SyntheticMouseEvent<HTMLDivElement>) => {
    if (e.target.id === 'overlay') return this.props.onRequestClose();
  };

  writeChanges = (
    e: SyntheticEvent<HTMLInputElement> | SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    console.log(e);
    if (e.type === 'keypress' && e.key !== 'Enter') return;
    this.props.writeChanges(this.props.id, e.currentTarget.value.trim());
    this.props.toggleEdit(this.props.id);
  };

  toggleEdit = (e: SyntheticEvent<HTMLInputElement>) => {
    if (e.currentTarget.type === 'INPUT') return;
    this.props.toggleEdit(this.props.id);
  };
  render() {
    const {catPic, id} = this.props;
    let {beingEdited, text, doneAt, last} = this.props.todos[id];
    if (modalRoot) {
      return ReacDOM.createPortal(
        <section className="modal_overlay">
          <div
            id="overlay"
            className="fullscreen"
            onClick={this.close}
            style={{top: window.scrollY}}
          >
            <div className="modal-wrapper" style={{maxWidth: '610px'}}>
              <content>
                <figure>
                  <img src={`data:image/jpg;base64,${catPic}`} alt="cat" />
                </figure>
                <div className="modal_quote_block" onClick={this.toggleEdit}>
                  {beingEdited && (
                    <input
                      className="modal_quote_block_text strikethrough edit"
                      type="text"
                      onBlur={this.writeChanges}
                      onKeyPress={this.writeChanges}
                      defaultValue={text}
                      autoFocus
                    />
                  )}
                  {!beingEdited && <p className="modal_quote_block_text">{text}</p>}
                </div>
                <div className="modal-footer">
                  {!doneAt && <p className="status"> In progress</p>}
                  {doneAt && (
                    <p className="status date">Completed on : {doneAt.toLocaleString()}</p>
                  )}
                </div>
              </content>
            </div>
          </div>
        </section>,
        modalRoot
      );
    }
    return null;
  }
}
