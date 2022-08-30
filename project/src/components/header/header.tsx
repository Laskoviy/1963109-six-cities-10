import React from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import HeaderGuest from '../header-guest/header-guest';
import HeaderUser from '../header-user/header-user';
import Logo from '../logo/logo';

const Header: React.FC = () => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo />

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">

              {authorizationStatus === AuthorizationStatus.Auth
                ? <HeaderUser />
                : <HeaderGuest />}

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
