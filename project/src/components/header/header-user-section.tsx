import React from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import HeaderGuest from './header-guest';
import HeaderUser from './header-user';

const HeaderUserSection: React.FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {isAuthorized ? <HeaderUser /> : <HeaderGuest />}
      </ul>
    </nav>
  );
};

export default HeaderUserSection;
