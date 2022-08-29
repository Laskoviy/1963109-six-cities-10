import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';
import { Offers } from '../types/offer';

export const changeCity = createAction<City>('main/changeCity');

export const setOffers = createAction<Offers>('main/setOffers');
