// src/components/common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">AIQ</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
