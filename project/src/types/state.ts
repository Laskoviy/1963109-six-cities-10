import { AuthorizationStatus, City } from '../const';
import { store } from '../store';
import { Offer, Offers } from './offer';
import { Reviews } from './reviews';

export type AppProcess = {
  activeCity: City
}

export type OfferListData = {
  offersList: Offers,
  isOffersListLoading: boolean,
}

export type OfferData = {
  offer: Offer | null,
  isOfferDataLoading: boolean,
  nearOffers: Offers
}

export type ReviewData = {
  reviews: Reviews,
  isReviewSending: boolean,
  isReviewSendSuccess: boolean,
  errorMessage: string | null
}

export type FavoriteData = {
  favoriteList: Offers,
  isFavoriteListLoading: boolean
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: {
    email: string | null
  },
  isLogoutProcessing: boolean,
  isLogoutError: boolean,
  isLoginError: boolean
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
