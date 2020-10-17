import React, { Component } from 'react';
import Header from './components/Header';
import ProductBox from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Blog managment System" />
        <br />
        <ProductBox />
      </div>
    );
  }
}

export default App;
