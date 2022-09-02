import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferData } from '../../types/state';
import { fetchNearOffersAction, fetchOfferAction } from '../api-actions';

const initialState: OfferData = {
  offer: null,
  isOfferDataLoading: true,
  nearOffers: [],
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOfferDataLoadStatus: (state, action) => {
      state.isOfferDataLoading = action.payload;
    },
    clearOfferData: (state) => {
      state.offer = null;
      state.isOfferDataLoading = true;
      state.nearOffers = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      });

    builder
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      });
  }
});

export const {
  setOfferDataLoadStatus,
  clearOfferData,
} = offerData.actions;
