import React from 'react';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favoritesPage/fav-page';
import LoadingPage from '../../pages/loadingPage/loading-page';
import MainPage from '../../pages/mainPage/main';
import NotFoundPage from '../../pages/notFoundPage/not-found';
import PropertyPage from '../../pages/property/property-page';
import { getDataLoadedStatus } from '../../store/app-data/selectors';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/reviews';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../privateRoute/private-route';

type Props = {
  favoriteOffers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews;
}


const App: React.FC<Props> = (props) => {
  const { favoriteOffers, nearPlacesOffers, reviews } = props;

  const isDataLoaded = useAppSelector(getDataLoadedStatus);

  if (isDataLoaded) {
    return <LoadingPage />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={
            <PropertyPage
              nearPlacesOffers={nearPlacesOffers}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage offers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoadingPage />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
