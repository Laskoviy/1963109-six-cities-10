import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ButtonClass, PageCardClass } from '../../../const';
import { Offer } from '../../../types/offer';
import BookmarkButton from '../../bookmark-button/bookmark-button';
import { capitalizeFirstLetter, getCountStars } from '../../utils/utils';

type Props = {
  offer: Offer;
  cardClass: PageCardClass;
  onActive: () => void;
  onInactive: () => void;
};

const ImageSize = {
  Big: {
    height: 200,
    width: 260,
  },
  Small: {
    height: 110,
    width: 150,
  }
} as const;

const Card: React.FC<Props> = (props) => {
  const { offer, cardClass, onActive, onInactive } = props;
  const countStars = getCountStars(offer.rating);
  const offerType = capitalizeFirstLetter(offer.type);
  const isFavoriteStyle = cardClass === PageCardClass.Favorite;
  const imageSize = isFavoriteStyle ? ImageSize.Small : ImageSize.Big;

  return (
    <article
      onMouseEnter={onActive}
      onMouseLeave={onInactive}
      className={`${cardClass}__card place-card`}
    >

      <div
        className="place-card__mark"
        hidden={!offer.isPremium}
      >
        <span>Premium</span>
      </div>

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <a style={{ pointerEvents: 'none' }} href="/">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={offer.title}
          />
        </a>
      </div>

      <div
        className={`place-card__info ${isFavoriteStyle ? 'favorites__card-info' : ''}`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton
            buttonClass={ButtonClass.OfferCard}
            isFavorite={offer.isFavorite}
          />

        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">

            <span style={{ width: countStars }} />

            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">

          <Link
            to={`${AppRoute.Room}/${offer.id}`}
          >
            {offer.title}
          </Link>

        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </article>
  );
};

export default Card;
