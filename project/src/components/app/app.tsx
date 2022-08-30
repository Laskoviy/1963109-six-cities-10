import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import FavoritesPage from '../../pages/favoritesPage/fav-page';
import LoadingPage from '../../pages/loadingPage/loading-page';
import LoginPage from '../../pages/loginPage/login-page';
import MainPage from '../../pages/mainPage/main';
import NotFoundPage from '../../pages/notFoundPage/not-found';
import PropertyPage from '../../pages/property/property-page';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/reviews';
import PrivateRoute from '../privateRoute/private-route';

type Props = {
  favoriteOffers: Offers;
  nearPlacesOffers: Offers;
  reviews: Reviews;
}

const App: React.FC<Props> = (props) => {
  const { favoriteOffers, nearPlacesOffers, reviews } = props;

  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isDataLoaded) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
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
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
