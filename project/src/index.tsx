import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { favoriteOffers, nearPlacesOffers, offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { setOffers } from './store/actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(setOffers(offers));

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
