import React from 'react';
import FavoriteOffersList from '../../components/favorite-offer-list/favorites-offer-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offer';

type Props = {
  offers: Offers
}

const FavoritesPage: React.FC<Props> = ({ offers }) => (
  <div className="page">
    <Header />
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
    <Footer />
  </div>
);

export default FavoritesPage;
