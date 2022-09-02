import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { favoriteOffers, nearPlacesOffers} from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { checkAuthAction, fetchOffersListAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        favoriteOffers={favoriteOffers}
        nearPlacesOffers={nearPlacesOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
