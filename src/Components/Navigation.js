import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_ROUTES } from '../Routes';

function NavigationItem({ title, link, active, onClick }) {
  return (
    <div className={`navigation-item ${active ? 'navigation-item-active' : null}`}>
      <Link to={link} onClick={onClick}>
        {title}
      </Link>
    </div>
  );
}

export default function Navigation() {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <header className="navigation">
      <nav>
        <div className="navigation-left">
          <NavigationItem
            title="Articles"
            link={CLIENT_ROUTES.ARTICLES}
            active={active === CLIENT_ROUTES.ARTICLES}
            onClick={() => setActive(CLIENT_ROUTES.ARTICLES)}
          />
          <NavigationItem
            title="Projects"
            link={CLIENT_ROUTES.PROJECTS}
            active={active === CLIENT_ROUTES.PROJECTS}
            onClick={() => setActive(CLIENT_ROUTES.PROJECTS)}
          />
        </div>
      </nav>
    </header>
  );
}
