import React from 'react';
import Main from '../../styled/Main';
const layout = ( props ) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Main>
      {props.children}
    </Main>
  </>
);

export default layout;