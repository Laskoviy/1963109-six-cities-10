import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoriteData } from '../../types/state';
import { fetchFavoriteListAction, logoutAction, postUserFavoriteAction } from '../api-actions';

const initialState: FavoriteData = {
  favoriteList: [],
  isFavoriteListLoading: true
};

export const favoriteData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteListAction.pending, (state) => {
        state.isFavoriteListLoading = true;
        state.favoriteList = [];
      })
      .addCase(fetchFavoriteListAction.fulfilled, (state, action) => {
        state.isFavoriteListLoading = false;
        state.favoriteList = action.payload;
      })
      .addCase(fetchFavoriteListAction.rejected, (state) => {
        state.isFavoriteListLoading = false;
      });

    builder
      .addCase(postUserFavoriteAction.fulfilled, (state, action) => {
        const favoriteOffer = state.favoriteList.find((favorite) => favorite.id === action.payload.id);

        if (favoriteOffer) {
          const newFavoriteList = state.favoriteList.filter((favorite) => favorite.id !== action.payload.id);

          state.favoriteList = newFavoriteList;
        } else {
          state.favoriteList.push(action.payload);
        }
      });

    builder
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteList = [];
      });
  }
});
