import React from 'react';
import GoogleAuth from './GoogleAuth'
import { Link } from 'react-router-dom'

function Header(props) {
  
  return (
    <div className="ui secondary pointing menu">
    <Link to="/" className="item">Twitcher Me</Link>
      <div className="right menu">
        <Link to="/" className="item">All Twitchers</Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;