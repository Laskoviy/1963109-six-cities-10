import { createAction } from '@reduxjs/toolkit';
import { City } from '../const';
import { Offers } from '../types/offer';

export const changeCity = createAction<City>('main/changeCity');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
