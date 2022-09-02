import React, { Fragment } from 'react';
import { PageCardClass } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavoriteList } from '../../store/favorite-data/selectors';
import FavoriteCity from './favorites-city';
import OffersList from '../offers/offers-list';
import { getCitiesOffers } from '../utils/utils';

const FavoriteList: React.FC = () => {
  const favoriteList = useAppSelector(getFavoriteList);
  const citiesOffers = getCitiesOffers(favoriteList);

  return (
    <Fragment>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {citiesOffers.map((items) => {
          const [city, cityOffers] = items;
          return (
            <li
              key={city}
              className="favorites__locations-items"
            >

              <FavoriteCity city={city} />

              <div className="favorites__places">
                <OffersList
                  offers={cityOffers}
                  cardClass={PageCardClass.Favorite}
                />
              </div>
            </li>);
        }
        )}
      </ul>
    </Fragment>
  );
};

export default FavoriteList;
