import React from 'react';
import Main from '../../styled/Layout/Main';
const layout = ( props ) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Main>
      {props.children}
    </Main>
  </>
);

export default layout;