import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Offers } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setDataLoadedStatus } from './actions';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);
