//добавление маршрутов
export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer',
  }

//добавление типов авторизации
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'] as const;

export enum ImageRoomCount {
    Start = 0,
    End = 6,
  }

export enum PageCardClass {
    Main = 'cities',
    Property = 'near-places',
    Favorite = 'favorites',
  }

export enum ButtonClass {
    Property = 'property',
    OfferCard = 'place-card',
  }

export const ButtonSize = {
  Big: {
    height: 33,
    width: 31,
  },
  Small: {
    height: 19,
    width: 18,
  }
} as const;

export const inputRatingOption = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' },
] as const;
