import React from 'react';
import Logo from '../Logo';
import {Header, Nav} from '../../styled/Navigation/ToolbarStyling';
import NavItems from './NavItems';

const toolbar = props => (
  <Header>
    <div>MENU</div>
    <Logo height="80%"/>
    <Nav>
      <NavItems />
    </Nav>
  </Header>
);

export default toolbar;