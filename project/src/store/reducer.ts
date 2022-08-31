
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, City } from '../const';
import { Offers } from '../types/offer';
import { changeCity, loadOffers, setAuthorizationStatus, setDataLoadedStatus} from './actions';

export type InitialState = {
  activeCity: City;
  offers: Offers;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  activeCity: City.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
