import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteOffersList from '../../components/favorite-offer-list/favorites-offer-list';
import Logo from '../../components/logo/logo';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offer';

type Props = {
  offers: Offers;
}

const FavoritesPage: React.FC<Props> = ({ offers }) => (
  <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="#">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            <FavoriteOffersList
              offers={offers}
              cardClass={PageCardClass.Favorite}
            />

          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  </div>
);

export default FavoritesPage;
