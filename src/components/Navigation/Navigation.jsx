import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
