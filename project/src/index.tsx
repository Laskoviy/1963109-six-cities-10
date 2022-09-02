import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { AppRoute, Timer } from './const';
import { store } from './store';
import { checkAuthAction, fetchOffersListAction } from './store/api-actions';

const isFavoritePath = window.location.pathname === AppRoute.Favorite;

store.dispatch(checkAuthAction(isFavoritePath));
store.dispatch(fetchOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ToastContainer
      newestOnTop
      pauseOnFocusLoss={false}
      autoClose={Timer.ToastClose}
    />
    <App />
  </Provider>
);
