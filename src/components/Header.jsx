import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink exact to="/" activeClassName="Link" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/villagers" activeClassName="Link" className="nav-link">
          Villagers
        </NavLink>
      </nav>
    </header>
  );
}
