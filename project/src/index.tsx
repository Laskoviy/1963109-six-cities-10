import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { favoriteOffers, nearPlacesOffers} from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOfferAction } from './store/api-actions';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoriteOffers={favoriteOffers}
        nearPlacesOffers={nearPlacesOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
);
