import React, {Component} from 'react';
import Main from '../../styled/Layout/Main';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render (){
    return (
      <>
        <Toolbar />
        <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler} />
        <Main>
          {this.props.children}
        </Main>
      </>
    )
  }
};

export default Layout;