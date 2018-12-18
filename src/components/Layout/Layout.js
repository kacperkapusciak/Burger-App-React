import React from 'react';
import Main from '../../styled/Layout/Main';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const layout = ( props ) => (
  <>
    <Toolbar />
    <SideDrawer />
    <Main>
      {props.children}
    </Main>
  </>
);

export default layout;