import React from 'react';
import NavItem from './NavigationItems/NavItem';
import {Nav} from '../../styled/Navigation/NavStyling';

const navigationItems = () => (
  <Nav>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </Nav>
);

export default navigationItems;