import { Reviews } from './reviews';

export type UserEmail = string;

export type OfferId = string | undefined;

export type FavoriteData = {
  id: number,
  status: 0 | 1
}

export type AuthData = {
  login: string,
  password: string
}

export type ReviewData = {
  id: number,
  rating: number,
  comment: string
}

export type UserData = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  isPro: boolean,
  token: string
}

export type ReviewResponseData = {
  data: Reviews,
  id: number,
  activeOfferId: number | undefined
}
