import { Icon } from 'leaflet';

//добавление маршрутов
export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer',
    NotFound = '*',
  }

export enum ImagePropertyCount {
    Start = 0,
    End = 6,
  }

export enum APIRoute {
    Offers = '/hotels',
    Login = '/login'
  }

//добавление типов авторизации
export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const;

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

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const city = [
  City.Paris,
  City.Cologne,
  City.Brussels,
  City.Amsterdam,
  City.Hamburg,
  City.Dusseldorf
] as const;

export const UrlMarker = {
  Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  Current: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg'
} as const;

export const IconParameter = {
  Size: {
    x: 40,
    y: 40
  },
  Anchor: {
    x: 20,
    y: 40
  }
} as const;

export const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});
