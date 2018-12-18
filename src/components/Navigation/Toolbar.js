import React from 'react';
import Logo from '../Logo';
import {Header, Nav} from '../../styled/Navigation/ToolbarStyling';
import NavItems from './NavItems';

const toolbar = props => (
  <Header>
    <div>MENU</div>
    <Logo />
    <Nav>
      <NavItems />
    </Nav>
  </Header>
);

export default toolbar;