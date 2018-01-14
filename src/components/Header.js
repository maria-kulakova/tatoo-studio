import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Tatoo Examples</Link>|
        <Link to='/contact'>Contact</Link>|
        <Link to='/about'>About</Link>
      </div>
    );
  }
}

export default Header;
