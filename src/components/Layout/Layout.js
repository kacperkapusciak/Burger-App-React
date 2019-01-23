import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }
  render (){
    return (
      <>
        <Toolbar 
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
            isAuth={this.props.isAuthenticated}
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler} />
        <Main>
          {this.props.children}
        </Main>
      </>
    )
  }
};

const Main = styled.div`
  margin-top: 72px;
`;

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
