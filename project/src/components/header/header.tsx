import React from 'react';
import Logo from '../logo/logo';
import HeaderUserSection from './header-user-section';

type Props = {
  isHideUserSection?: boolean
}


const Header: React.FC<Props> = ({ isHideUserSection }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>

        {!isHideUserSection && <HeaderUserSection />}
      </div>
    </div>
  </header>
);

export default Header;
