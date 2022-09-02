import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/offer';
import { State } from '../../types/state';

export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;

export const getNearOffers = (state: State): Offers => state[NameSpace.Offer].nearOffers;

export const getOfferDataLoadStatus = (state: State): boolean => state[NameSpace.Offer].isOfferDataLoading;
