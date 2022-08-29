import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { offers } from '../../mocks/offers';
import FavoritesPage from '../../pages/favoritesPage/fav-page';
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

function App(props: Props): JSX.Element {
  const { favoriteOffers, nearPlacesOffers, reviews } = props;

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
              offers={offers}
              nearPlacesOffers={nearPlacesOffers}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
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
}

export default App;
