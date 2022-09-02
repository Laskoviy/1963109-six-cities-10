import React, { Fragment, MouseEvent, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppRoute, LogoutText, Timer } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavoriteList, getFavoriteLoadStatus } from '../../store/favorite-data/selectors';
import { getLogoutErrorStatus, getLogoutProcessStatus, getUserEmail } from '../../store/user-process/selectors';
import { clearLogoutError } from '../../store/user-process/user-process';

const HeaderUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPath = useLocation().pathname;
  const timerIdRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const favoriteList = useAppSelector(getFavoriteList);
  const userEmail = useAppSelector(getUserEmail);

  const isFavoriteLoading = useAppSelector(getFavoriteLoadStatus);
  const isLogoutProcessing = useAppSelector(getLogoutProcessStatus);
  const isLogoutError = useAppSelector(getLogoutErrorStatus);
  const isFavoritePath = currentPath === AppRoute.Favorite;

  const favoriteCount = isFavoriteLoading ? '' : favoriteList.length;
  const signoutText = isLogoutProcessing ? LogoutText.Exiting : LogoutText.SignOut;

  const linkUserNameClass = classNames('header__nav-link header__nav-link--profile', {
    'link__disabled': isFavoritePath
  });

  const linkSingoutClass = classNames('header__nav-link', {
    'link__disabled': isLogoutError || isLogoutProcessing
  });

  const spanSignoutClass = classNames('header__signout', {
    'header__signout__error horizontal-shake': isLogoutError
  });

  if (isLogoutError && !timerIdRef.current) {
    timerIdRef.current = setTimeout(() => {
      dispatch(clearLogoutError());
      timerIdRef.current = undefined;
    }, Timer.Logout);
  }

  useEffect(
    () =>
      () => {
        if (timerIdRef.current) {
          toast.dismiss();
          dispatch(clearLogoutError());
          clearTimeout(timerIdRef.current);
        }
      }, [dispatch]);


  return (
    <Fragment>
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorite}
          className={linkUserNameClass}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" />

          <span className="header__user-name user__name">{userEmail}</span>

          <span className="header__favorite-count">{favoriteCount}</span>
        </Link>
      </li>

      <li className="header__nav-item">
        <a
          onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
            evt.preventDefault();
            toast.dismiss();

            if (!isLogoutError) {
              dispatch(logoutAction());
            }
          }}
          className={linkSingoutClass} href="/"
        >
          <span className={spanSignoutClass}>{signoutText}</span>
        </a>
      </li>
    </Fragment>
  );
};

export default HeaderUser;
