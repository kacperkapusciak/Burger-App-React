import React from 'react';
import Logo from '../Logo';
import {Header, Nav} from '../../styled/Navigation/ToolbarStyling';

const toolbar = props => (
  <Header>
    <div>MENU</div>
    <Logo />
    <Nav>
      ...
    </Nav>
  </Header>
);

export default toolbar;