
import { createReducer } from '@reduxjs/toolkit';
import { City } from '../const';
import { InitialState } from '../types/state';
import { changeCity, setOffers } from './actions';

const initialState: InitialState = {
  activeCity: City.Paris,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
