import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import {Link, useLocation} from 'react-router-dom';
import { AppRoute, City } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/app-process/app-process';

const Logo: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentPath = useLocation().pathname;
  const isDisabled = currentPath === AppRoute.Main;

  const linkClass = classNames('header__logo-link', {
    'link__disabled': isDisabled
  });

  return (
    <Link
      onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
        dispatch(setActiveCity(City.Paris));
      }}
      to={AppRoute.Main}
      className={linkClass}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
};

export default Logo;
