import { createAction } from '@reduxjs/toolkit';
import { AppRoute, City } from '../const';

export const changeCity = createAction<City>('main/changeCity');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
