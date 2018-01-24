import React from 'react';
import { Nav, NavItem } from 'react-gears';
import { Link } from 'preact-router/match';
import { translate } from 'react-i18next';

export default translate('translations')(({ t }) => (
  <Nav tabs className="mb-3">
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/">
        {t('nav.home')}
      </Link>
    </NavItem>
    <NavItem>
      <Link activeClassName="active" className="nav-link" href="/profile">
        {t('nav.me')}
      </Link>
    </NavItem>
  </Nav>
));
