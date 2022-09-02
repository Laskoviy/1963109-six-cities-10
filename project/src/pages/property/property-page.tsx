import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../../components/favorite/favorite-button';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OffersList from '../../components/offers/offers-list';
import PicturesList from '../../components/pictures-list/pictures-list';
import PremiumMark from '../../components/premium-mark/premium-mark';
import PropertyFeatures from '../../components/property/property-features';
import PropertyGoods from '../../components/property/property-goods';
import PropertyHost from '../../components/property/property-host';
import PropertyReviews from '../../components/property/property-reviews';
import { ComponentClass, MapClass, PageCardClass } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveCity } from '../../store/app-process/selectors';
import NotFoundPage from '../not-found-page/not-found';
import RatingModule from '../../components/rating-block/rating-block';
import LoadingPage from '../loading-page/loading-page';
import { clearOfferData, setOfferDataLoadStatus } from '../../store/offer-data/offer-data';
import { clearReviewData } from '../../store/review-data/review-data';
import { getNearOffers, getOffer, getOfferDataLoadStatus } from '../../store/offer-data/selectors';
import { getReviews } from '../../store/review-data/selector';
import { fetchNearOffersAction, fetchOfferAction, fetchRewiesAction } from '../../store/api-actions';

const PropertyScreen: React.FC = () => {

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const promiseOffer = dispatch(fetchOfferAction(id));
    const promiseNearOffers = dispatch(fetchNearOffersAction(id));
    const promiseReviews = dispatch(fetchRewiesAction(id));

    Promise.allSettled([promiseOffer, promiseNearOffers, promiseReviews])
      .then(() => dispatch(setOfferDataLoadStatus(false)));

    return () => {
      promiseOffer.abort();
      promiseNearOffers.abort();
      promiseReviews.abort();

      dispatch(clearOfferData());
      dispatch(clearReviewData());
    };
  }, [id, dispatch]);

  const activeCity = useAppSelector(getActiveCity);
  const activeOffer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);

  const isDataLoading = useAppSelector(getOfferDataLoadStatus);
  const isNotFoundOffer = activeOffer === null;

  if (isDataLoading) {
    return <LoadingPage />;
  }

  if (isNotFoundOffer) {
    return <NotFoundPage />;
  }

  const offersList = [activeOffer, ...nearOffers];

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PicturesList imagesList={activeOffer.images} />
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              <PremiumMark
                isPremium={activeOffer.isPremium}
                componentClass={ComponentClass.Property}
              />

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {activeOffer.title}
                </h1>

                <FavoriteButton
                  offerId={activeOffer.id}
                  favoriteStatus={activeOffer.isFavorite}
                  buttonClass={ComponentClass.Property}
                />
              </div>

              <RatingModule
                rating={activeOffer.rating}
                componentClass={ComponentClass.Property}
              />

              <PropertyFeatures offer={activeOffer} />

              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>

              <PropertyGoods goods={activeOffer.goods} />

              <PropertyHost offer={activeOffer} />

              <PropertyReviews offerId={activeOffer.id} reviews={reviews} />

            </div>
          </div>

          <Map
            activeCity={activeCity}
            activeCityOffers={offersList}
            activeCardId={activeOffer.id}
            mapClass={MapClass.Property}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <OffersList
                offers={nearOffers}
                cardClass={PageCardClass.Property}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyScreen;

