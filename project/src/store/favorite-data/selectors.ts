import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getFavoriteList = (state: State): Offers => state[NameSpace.Favorite].favoriteList;

export const getFavoriteLoadStatus = (state: State): boolean => state[NameSpace.Favorite].isFavoriteListLoading;
