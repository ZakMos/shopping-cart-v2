import React, { Component, Fragment } from 'react';
import './styles/main.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ProductList />
        <ShoppingCart />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
