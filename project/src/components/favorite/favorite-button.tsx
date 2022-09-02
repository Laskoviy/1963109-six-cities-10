import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { AppRoute, AuthorizationStatus, ButtonSize, ComponentClass, FavoriteAction, FavoriteActionInfo, RequestStatus, Timer, TOAST_TYPE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { toast } from 'react-toastify';
import { postUserFavoriteAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/actions';

type FavoriteButtonProps = {
  offerId: number,
  favoriteStatus: boolean,
  buttonClass: ComponentClass,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ offerId, favoriteStatus, buttonClass }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(favoriteStatus);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toastIdRef = useRef<number | string | null>(null);
  const timerIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isNoAuthorized = authorizationStatus === AuthorizationStatus.NoAuth;

  const actionType = isFavorite ? FavoriteAction.Delete : FavoriteAction.Add;
  const actionTypeInfo = isFavorite ? FavoriteActionInfo.Removed : FavoriteActionInfo.Add;
  const buttonSize = buttonClass === ComponentClass.OfferCard ? ButtonSize.Small : ButtonSize.Big;

  const btnClass = classNames(`${buttonClass}__bookmark-button button`, {
    [`${buttonClass}__bookmark-button--active`]: isFavorite
  });

  const onClick = async () => {
    toast.dismiss();
    setIsLoading(true);

    toastIdRef.current = toast.loading(FavoriteActionInfo.Loading);

    const responseData = await dispatch(postUserFavoriteAction({
      id: offerId,
      status: actionType
    }));

    if (responseData.meta.requestStatus === RequestStatus.Fulfilled) {
      setIsFavorite((prevState) => !prevState);
      toast.update(toastIdRef.current, {
        render: actionTypeInfo,
        type: TOAST_TYPE,
        isLoading: false,
        autoClose: Timer.ToastClose
      });
    } else {
      toast.dismiss(toastIdRef.current);
    }

    timerIdRef.current = setTimeout(() => {
      setIsLoading(false);
      timerIdRef.current = undefined;
    }, Timer.Favorite);
  };

  const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {

    if (isNoAuthorized) {
      dispatch(redirectToRoute(AppRoute.Login));
      return;
    }

    onClick();
  };

  useEffect(
    () =>
      () => {
        if (timerIdRef.current) {
          clearTimeout(timerIdRef.current);
        }
      }, []);


  return (
    <button
      onClick={handleClick}
      className={btnClass}
      type="button"
      disabled={isLoading}
    >
      <svg
        className={`${buttonClass}__bookmark-icon`}
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
