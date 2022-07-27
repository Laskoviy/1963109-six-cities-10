import {Link} from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
