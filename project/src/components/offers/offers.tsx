import React, { useCallback, useEffect, useState } from 'react';
import { MapClass, PageCardClass, SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getActiveCity } from '../../store/app-process/selectors';
import { filterActiveCityOffers } from '../../store/offer-list-data/selectors';
import Map from '../map/map';
import SortOptions from '../sort-options/sort-options';
import { getSortedOffers } from '../utils/utils';
import OffersList from './offers-list';

const MainOffers: React.FC = () => {
  const activeCity = useAppSelector(getActiveCity);
  const activeCityOffers = useAppSelector(filterActiveCityOffers);

  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [activeSortType, setActiveSortType] = useState<SortType>(SortType.Popular);

  useEffect(() => {
    setActiveSortType(SortType.Popular);
  }, [activeCity]);

  const sortedActiveCityOffers = getSortedOffers(activeSortType, activeCityOffers);
  const offersCount = activeCityOffers.length;

  const onActiveCard = useCallback((value: number | null) => {
    setActiveCardId(value);
  }, []);

  const onActiveSortType = useCallback((sortType: SortType) => {
    setActiveSortType(sortType);
  }, []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {offersCount} places to stay in Amsterdam
        </b>

        <SortOptions
          activeCity={activeCity}
          activeSortType={activeSortType}
          onActiveSortType={onActiveSortType}
        />

        <div className="cities__places-list places__list tabs__content">
          <OffersList
            offers={sortedActiveCityOffers}
            cardClass={PageCardClass.Main}
            onActiveCard={onActiveCard}
          />
        </div>
      </section>

      <div className="cities__right-section">
        <Map
          activeCity={activeCity}
          activeCityOffers={activeCityOffers}
          activeCardId={activeCardId}
          mapClass={MapClass.Main}
        />
      </div>
    </div>
  );
};

export default MainOffers;
