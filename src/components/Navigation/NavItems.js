import React from 'react';
import NavItem from './NavigationItems/NavItem';
import {Nav} from '../../styled/Navigation/NavStyling';

const navigationItems = () => (
  <Nav>
    <NavItem link="/" exact>Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </Nav>
);

export default navigationItems;