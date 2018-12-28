import React, { Component } from 'react';
import BurgerBuilder from './containers/BurderBuilder';
import Layout from './components/Layout/Layout';
import Checkout from './containers/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
