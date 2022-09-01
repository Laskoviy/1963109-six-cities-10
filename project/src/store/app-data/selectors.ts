import { createSelector } from 'reselect';
import { getActiveCityOffers } from '../../components/utils/utils';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';
import { getActiveCity } from '../app-process/selectors';

export const getOffers = (state: State): Offers => state[NameSpace.Data].offers;
export const getDataLoadedStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const filterActiveCityOffers = createSelector(
  [getActiveCity, getOffers],
  (activeCity, offers) => getActiveCityOffers(activeCity, offers)
);
