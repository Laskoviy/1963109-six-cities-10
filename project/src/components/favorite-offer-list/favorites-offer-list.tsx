import { Fragment } from 'react';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offer';
import FavoriteCity from '../fav-city/fav-city';
import OffersList from '../offers-list/offers-list';
import { getCitiesOffers } from '../utils/utils';

type Props = {
    offers: Offers;
    cardClass: PageCardClass;
  }

function FavoriteOffersList({ offers, cardClass }: Props): JSX.Element {
  const citiesOffers = getCitiesOffers(offers);

  return (
    <Fragment>
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
                cardClass={cardClass}
              />
            </div>
          </li>);
      }
      )}
    </Fragment >
  );
}

export default FavoriteOffersList;
