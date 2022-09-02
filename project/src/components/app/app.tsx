import React from 'react';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favoritesPage/fav-page';
import LoginPage from '../../pages/loginPage/login-page';
import MainPage from '../../pages/mainPage/main';
import NotFoundPage from '../../pages/notFoundPage/not-found';
import PropertyPage from '../../pages/property/property-page';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../privateRoute/private-route';

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
