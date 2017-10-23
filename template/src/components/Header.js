import React from 'react';
import { Nav, NavItem } from 'react-gears';
import { Link } from 'preact-router/match';

export default () => (
  <Nav tabs>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/">
        Home
      </Link>
    </NavItem>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/profile">
        Me
      </Link>
    </NavItem>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/profile/123">
        John
      </Link>
    </NavItem>
  </Nav>
);
