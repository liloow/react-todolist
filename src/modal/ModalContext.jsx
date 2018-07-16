// @flow

import React, {Component, createContext} from 'react';

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: (...args) => {},
  hideModal: () => {},
});

type Props = {
  children: React$Node, //<React$Component<any>>,
};

type State = {
  component: ?React$Element<any>,
  props: {},
  showModal: Function,
  hideModal: Function,
};

export class ModalProvider extends Component<Props, State> {
  async componentDidMount() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    window.addEventListener(
      'keydown',
      e => {
        if (e.key === 'Escape') this.hideModal();
      },
      false
    );
  }

  componentWillUnmount() {
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
    window.removeEventListener(
      'keydown',
      e => {
        if (e.key === 'Escape') this.hideModal();
      },
      false
    );
  }

  showModal = (component: ?React$Element<any>, props: Props) => {
    this.setState({
      component,
      props,
    });
  };

  hideModal = () =>
    this.setState({
      component: null,
      props: {},
    });

  state = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
  };
  render() {
    return <ModalContext.Provider value={this.state}>{this.props.children}</ModalContext.Provider>;
  }
}

export const ModalConsumer = ModalContext.Consumer;
