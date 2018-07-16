// @flow

import React, {Component, createContext} from 'react';

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

type Props = {
  children: {},
};

type State = {
  component: ?React$Component<{}>,
  props: {},
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

  showModal = (component: React$Component<{}>, props: Props) => {
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
