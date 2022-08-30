import React, { Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

const HeaderUser: React.FC = () => {

  const dispatch = useAppDispatch();

  return (

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
            dispatch(logoutAction());
          }}
          className="header__nav-link" href="/"
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </Fragment>
  );
};


export default HeaderUser;
