import React from 'react';
import Logo from '../Logo';
import NavItems from '../Navigation/NavItems';
import {Nav, Drawer} from '../../styled/Navigation/NavStyling';
import Backdrop from '../UI/Backdrop';

const sideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <Drawer open={props.open} >
        <Logo height="11%" marginBottom="32px"/>
        <Nav>
          <NavItems />
        </Nav>
      </Drawer>
    </>
  );
};


export default sideDrawer;