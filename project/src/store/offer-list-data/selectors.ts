import { createSelector } from 'reselect';
import { getActiveCityOffers } from '../../components/utils/utils';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { getActiveCity } from '../app-process/selectors';
import { State } from './../../types/state';
export const getOffersList = (state: State): Offers => state[NameSpace.OfferList].offersList;

export const getOffersListLoadStatus = (state: State): boolean => state[NameSpace.OfferList].isOffersListLoading;

export const filterActiveCityOffers = createSelector(
  [getActiveCity, getOffersList],
  (activeCity, offersList) => getActiveCityOffers(activeCity, offersList)
);

export const getIsEmptyOffers = createSelector(
  [getOffersList],
  (offersList) => !offersList.length
);
