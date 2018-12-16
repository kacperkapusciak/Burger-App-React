import React from 'react';
import ModalWrapper from '../../../styled/BurgerWrapper';

const modal = props => (
  <ModalWrapper>
    {props.children}
  </ModalWrapper>
);

export default modal;