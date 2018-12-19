import React from 'react';
import Logo from '../Logo';
import NavItems from '../Navigation/NavItems';
import styled from 'styled-components';
import {Nav} from '../../styled/Navigation/NavStyling';

const Drawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }
`;

const sideDrawer = () => {

  return (
    <Drawer>
      <Logo height="11%" marginBottom="32px"/>
      <Nav>
        <NavItems />
      </Nav>
    </Drawer>
  );
};


export default sideDrawer;