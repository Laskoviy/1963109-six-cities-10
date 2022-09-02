import React from 'react';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found';
import PropertyPage from '../../pages/property/property-page';
import HistoryRouter from '../history-router/history-router';
import PrivateRouteLogin from '../private-rote-login/private-rote-login';
import PrivateRoute from '../private-route/private-route';

const App: React.FC = (props) => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainPage />}
      />
      <Route
        path={`${AppRoute.Property}/:id`}
        element={
          <PropertyPage />
        }
      />
      <Route
        path={AppRoute.Favorite}
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Login}
        element={
          <PrivateRouteLogin>
            <LoginPage />
          </PrivateRouteLogin>
        }
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  </HistoryRouter>
);

export default App;
