import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';

type Props = {
  children: JSX.Element
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { authorizationStatus } = useAppSelector((state) => state);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
