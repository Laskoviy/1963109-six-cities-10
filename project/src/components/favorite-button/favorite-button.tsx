import React from 'react';
import classNames from 'classnames';
import { ButtonSize, ComponentClass } from '../../const';

type Props = {
  buttonClass: ComponentClass,
    isFavorite: boolean;
  }

const FavoriteButton: React.FC<Props> = ({ buttonClass, isFavorite }) => {
  const buttonSize = buttonClass === ComponentClass.OfferCard ? ButtonSize.Small : ButtonSize.Big;

  const btnClass = classNames(`${buttonClass}__bookmark-button button`, {
    [`${buttonClass}__bookmark-button--active`]: isFavorite
  });

  return (
    <button
      className={btnClass}
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

export default FavoriteButton;
