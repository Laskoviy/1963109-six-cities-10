
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { appProcess } from './app-process/app-process';
import { favoriteData } from './favorite-data/favorite-data';
import { offerData } from './offer-data/offer-data';
import { offerListData } from './offer-list-data/offer-list-data';
import { reviewData } from './review-data/review-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.OfferList]: offerListData.reducer,
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Review]: reviewData.reducer,
  [NameSpace.Favorite]: favoriteData.reducer,
  [NameSpace.User]: userProcess.reducer,
});


