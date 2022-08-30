
import React from 'react';
import CitiesListTabs from '../../components/cities-list-tabs/cities-list-tabs';
import Header from '../../components/header/header';
import MainOffers from '../../components/offers/offers';
import MainOffersEmpty from '../../components/offers/offers-empty';
import { getActiveCityOffers } from '../../components/utils/utils';
import { PageCardClass } from '../../const';
import { useAppSelector } from '../../hooks';

const MainPage: React.FC = () => {
  const { offers, activeCity } = useAppSelector((state) => state);

  const activeCityOffers = getActiveCityOffers(activeCity, offers);

  const offersCount = activeCityOffers.length;

  const isEmptyOffers = !offersCount;

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main
        className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">

            <CitiesListTabs activeCity={activeCity} />

          </section>
        </div>

        <div className="cities">
          {isEmptyOffers
            ? <MainOffersEmpty activeCity={activeCity} />
            : <MainOffers offersCount={offersCount} activeCityOffers={activeCityOffers} cardClass={PageCardClass.Main} activeCity={activeCity} />}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
