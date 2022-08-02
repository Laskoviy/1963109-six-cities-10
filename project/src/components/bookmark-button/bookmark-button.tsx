import { ButtonClass, ButtonSize } from '../../const';

type Props = {
    buttonClass: ButtonClass,
    isFavorite: boolean;
  }

function BookmarkButton({ buttonClass, isFavorite }: Props): JSX.Element {
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
}


export default BookmarkButton;
