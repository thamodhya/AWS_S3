import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add">Add File</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
