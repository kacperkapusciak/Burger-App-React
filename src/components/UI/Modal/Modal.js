import React from 'react';
import ModalWrapper from '../../../styled/ModalWrapper';

const modal = props => (
  <ModalWrapper style={{
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  }}>
    {props.children}
  </ModalWrapper>
);

export default modal;