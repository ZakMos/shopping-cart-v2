import React, { Component } from 'react';
import logo from '../shopingCart.png';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">Welcome to Shopping</h1>
        <p>last update 01.06.2021</p>
      </header>
    )
  }
}

export default Header;
