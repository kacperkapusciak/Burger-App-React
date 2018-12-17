import React from 'react';
import Main from '../../styled/Layout/Main';
import Toolbar from '../Navigation/Toolbar';

const layout = ( props ) => (
  <>
    <Toolbar />
    <Main>
      {props.children}
    </Main>
  </>
);

export default layout;