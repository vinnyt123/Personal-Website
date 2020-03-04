import React from 'react';

import {
    Link 
} from 'react-router-dom';

//Includes
import './header.css';

function Header() {
  return (
    <header className='appHeader'>
        <Link to="/"> Vinny Tunnell </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/contact"> Contact </Link>
    </header>
  );
}

export default Header;
