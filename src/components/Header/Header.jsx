import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <a href="/" aria-label="Home - Springfield Speaks" className="header-link">
        <img src="/springfield-speaks-logo.svg" alt="SpringfieldSpeaks Logo" className="header-logo" />
        Springfield Speaks
      </a>
    </header>
  );
}

export default Header;