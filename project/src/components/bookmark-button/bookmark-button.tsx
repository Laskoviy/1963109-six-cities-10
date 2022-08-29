import React from 'react';
import { ButtonClass, ButtonSize } from '../../const';

type Props = {
    buttonClass: ButtonClass,
    isFavorite: boolean;
   /*  onClick={() => changeFavoriteStatus(offer.id, !offer.isFavorite)} (оставил на следующий раз)*/
  }

const BookmarkButton: React.FC<Props> = ({ buttonClass, isFavorite }) => {
  const buttonSize = buttonClass === ButtonClass.OfferCard ? ButtonSize.Small : ButtonSize.Big;

  return (
    <button
      className={`${buttonClass}__bookmark-button button ${isFavorite ? `${buttonClass}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={buttonSize.width}
        height={buttonSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};


export default BookmarkButton;
