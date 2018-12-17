import React from 'react';
import ModalWrapper from '../../../styled/ModalWrapper';

const modal = props => (
  <ModalWrapper>
    {props.children}
  </ModalWrapper>
);

export default modal;