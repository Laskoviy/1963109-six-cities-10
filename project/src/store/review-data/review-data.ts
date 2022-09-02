import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewData } from '../../types/state';
import { fetchRewiesAction, postUserReviewAction } from '../api-actions';

const initialState: ReviewData = {
  reviews: [],
  isReviewSending: false,
  isReviewSendSuccess: false,
  errorMessage: null,
};

export const reviewData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    resetReviewSendSuccessStatus: (state) => {
      state.isReviewSendSuccess = false;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
    clearReviewData: (state) => {
      state.reviews = [];
      state.isReviewSending = false;
      state.isReviewSendSuccess = false;
      state.errorMessage = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRewiesAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });

    builder
      .addCase(postUserReviewAction.pending, (state) => {
        state.isReviewSending = true;
      })
      .addCase(postUserReviewAction.fulfilled, (state, action) => {
        if (action.payload.activeOfferId === action.payload.id) {
          state.reviews = action.payload.data;
          state.isReviewSending = false;
          state.isReviewSendSuccess = true;
        }
      })
      .addCase(postUserReviewAction.rejected, (state, action) => {
        state.isReviewSending = false;
        if (action.error.message) {
          state.errorMessage = action.error.message;
        }
      });
  }
});

export const { resetReviewSendSuccessStatus, clearErrorMessage, clearReviewData } = reviewData.actions;
