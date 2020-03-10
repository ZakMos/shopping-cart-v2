import React, { Component } from 'react';
import logo from '../shopingCart.png';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">Welcome to Shopping</h1>
        <p>last update 10.03.2020</p>
      </header>
    )
  }
}

export default Header;
