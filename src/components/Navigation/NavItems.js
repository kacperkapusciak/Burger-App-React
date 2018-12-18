import React from 'react';
import styled from 'styled-components';
import NavItem from './NavigationItems/NavItem';

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const navigationItems = () => (
  <Nav>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>
  </Nav>
);

export default navigationItems;