import React from 'react';
import Logo from '../Logo';
import {Header, Nav} from '../../styled/Navigation/ToolbarStyling';
import NavItems from './NavItems';
import DrawerToggle from './DrawerToggle';

const toolbar = props => (
  <Header>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <Logo height="80%"/>
    <Nav>
      <NavItems isAuth={props.isAuth}/>
    </Nav>
  </Header>
);

export default toolbar;
