import React, { Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const HeaderUser: React.FC = () => (
  <Fragment>
    <li className="header__nav-item user">
      <Link
        to={AppRoute.Favorites}
        className="header__nav-link header__nav-link--profile"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper" />

        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>

        <span className="header__favorite-count">3</span>
      </Link>
    </li>

    <li className="header__nav-item">
      <a
        onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
          evt.preventDefault();
        }}
        className="header__nav-link" href="/"
      >
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  </Fragment>
);


export default HeaderUser;
