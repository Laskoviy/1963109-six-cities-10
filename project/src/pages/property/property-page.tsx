import {Link, useParams} from 'react-router-dom';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import FormReview from '../../components/form-review/form-review';
import Logo from '../../components/logo/logo';
import Map from '../../components/map/map';
import OffersList from '../../components/offers-list/offers-list';
import PropertyFeatures from '../../components/property-features/property-features';
import PropertyPicture from '../../components/property-picture/property-picture';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { capitalizeFirstLetter, getCountStars } from '../../components/utils/utils';
import { ButtonClass, ImageRoomCount, PageCardClass } from '../../const';
import { City } from '../../mocks/offers';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/reviews';
import NotFoundPage from '../notFoundPage/not-found';

type Props = {
  offers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews
}

function PropertyPage({ offers, nearPlacesOffers, reviews }: Props): JSX.Element {
  const { id } = useParams();
  const numId = Number(id);
  const offer = offers.find((item) => item.id === numId);
  const isNaN = !numId;
  const isNotOffer = !offer;
  /* nearPlacesOffers.forEach((e, i) => { if (i < 3) {return (e);} }); */

  if (isNaN || isNotOffer) {
    return <NotFoundPage />;
  }

  const images = offer.images.slice(ImageRoomCount.Start, ImageRoomCount.End);
  const countStars = getCountStars(offer.rating);
  const offerType = capitalizeFirstLetter(offer.type);

  return (
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
                    <div className="header__avatar-wrapper user__avatar-wrapper"/>
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((src) => <PropertyPicture key={src} src={src} alt={''} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div
                className="property__mark"
                hidden={!offer.isPremium}
              >
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <BookmarkButton
                  buttonClass={ButtonClass.Property}
                  isFavorite={offer.isFavorite}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: countStars}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${offer.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${offer.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PropertyFeatures goods={offer.goods} />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <FormReview />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              city={City}
              offers={nearPlacesOffers}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearPlacesOffers}
                cardClass={PageCardClass.Property}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
