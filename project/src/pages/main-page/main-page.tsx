
import React from 'react';
import classNames from 'classnames';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Header from '../../components/header/header';
import MainOffers from '../../components/offers/offers';
import MainOffersEmpty from '../../components/offers/offers-empty';
import { useAppSelector } from '../../hooks';
import LoadingPage from '../loading-page/loading-page';
import { getOffersListLoadStatus, getIsEmptyOffers } from '../../store/offer-list-data/selectors';

const MainPage: React.FC = () => {
  const isEmptyOffers = useAppSelector(getIsEmptyOffers);
  const isDataLoading = useAppSelector(getOffersListLoadStatus);

  const mainClass = classNames('page__main page__main--index', {
    'page__main--index-empty': isEmptyOffers
  });

  if (isDataLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesTabs />
          </section>
        </div>

        <div className="cities">
          {isEmptyOffers ? <MainOffersEmpty /> : <MainOffers />}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
