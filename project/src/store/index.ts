import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI} from '../services/api';
import { redirect } from './middlewares/redirect';


const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
