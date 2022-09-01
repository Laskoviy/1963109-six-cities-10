import { createSlice } from '@reduxjs/toolkit';
import { City, NameSpace } from '../../const';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  activeCity: City.Paris,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    }
  }
});

export const { setActiveCity } = appProcess.actions;
