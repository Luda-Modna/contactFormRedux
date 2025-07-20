import React from 'react';
import { NavLink, Outlet } from 'react-router';

function Header () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/contacts'>Contacts</NavLink>
          </li>
          <li>
            <NavLink to='/post'>Post</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
