import React from 'react';
import NavItem from './NavigationItems/NavItem';
import {Nav} from '../../styled/Navigation/NavStyling';

const navigationItems = (props) => (
  <Nav>
    <NavItem link="/" exact>Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
    {!props.isAuth 
      ? <NavItem link="/auth">Authenticate</NavItem> 
      : <NavItem link="/logout">Logout</NavItem>}
  </Nav>
);

export default navigationItems;
