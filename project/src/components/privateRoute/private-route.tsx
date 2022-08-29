import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
