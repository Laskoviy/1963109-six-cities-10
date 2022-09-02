import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserEmail = (state: State): string | null => state[NameSpace.User].userData.email;

export const getLogoutProcessStatus = (state: State): boolean => state[NameSpace.User].isLogoutProcessing;

export const getLogoutErrorStatus = (state: State): boolean => state[NameSpace.User].isLogoutError;

export const getLoginErrorStatus = (state: State): boolean => state[NameSpace.User].isLoginError;
