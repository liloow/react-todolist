// @flow

import React from 'react';
import {ModalConsumer} from './ModalContext';

export const ModalRoot = () => (
  <ModalConsumer>{({component, props, hideModal}) => component}</ModalConsumer>
);
