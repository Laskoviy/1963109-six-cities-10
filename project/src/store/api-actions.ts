import { AuthData, FavoriteData, ReviewData, ReviewResponseData, UserData, UserEmail } from './../types/server-data';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, ToastText } from '../const';
import { dropToken, saveToken } from '../services/token';
import { Offer, Offers } from '../types/offer';
import { Reviews } from '../types/reviews';
import { OfferId } from '../types/server-data';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute } from './actions';
import { toast } from 'react-toastify';

export const fetchOffersListAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffersList',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offer);
    return data;
  },
);


export const fetchOfferAction = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offer}/${id}`);
    return data;
  },
);


export const fetchNearOffersAction = createAsyncThunk<Offers, OfferId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearOffers',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offer}/${id}/${APIRoute.Nearby}`);
    return data;
  },
);

export const fetchFavoriteListAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavoriteList',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorite);
    return data;
  },
);

export const postUserFavoriteAction = createAsyncThunk<Offer, FavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'favorite/postUserFavorite',
  async ({ id, status }, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

export const fetchRewiesAction = createAsyncThunk<Reviews, OfferId, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchRewies',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comment}/${id}`);
    return data;
  },
);


export const postUserReviewAction = createAsyncThunk<ReviewResponseData, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postUserReview',
  async ({ id, rating, comment }, { dispatch, extra: api, getState }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Comment}/${id}`, { rating, comment });
    const activeOfferId = getState().OFFER.offer?.id;

    return ({ data, id, activeOfferId });
  }
);


export const checkAuthAction = createAsyncThunk<UserEmail, boolean, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (isFavoritePath, { dispatch, extra: api }) => {
    const { data: { email } } = await api.get<UserData>(APIRoute.Login);

    if (!isFavoritePath) {
      dispatch(fetchFavoriteListAction());
    }

    return email;
  },
);


export const loginAction = createAsyncThunk<UserEmail, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token, email: emailData } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchFavoriteListAction());
    toast.success(ToastText.SuccessLogged);

    return emailData;
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

