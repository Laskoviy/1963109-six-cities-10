import { Icon } from 'leaflet';

//добавление маршрутов
export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Room = '/offer',
    NotFound = '*',
  }

export enum MapClass {
    Main = 'cities__map map',
    Property = 'property__map map'
  }

export enum APIRoute {
    Offer = '/hotels',
    Login = '/login',
    Logout = '/logout',
    Nearby = 'nearby',
    Comment = '/comments',
    Favorite = '/favorite'
  }

export const ToastText = {
  SuccessLogged: 'You are successfully logged in!',
  ReviewAdded: 'Review successfully added!'
} as const;

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

export enum ComponentClass {
    Property = 'property',
    OfferCard = 'place-card',
    Review = 'reviews'
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
  Default: 'img/pin.svg',
  Active: 'img/pin-active.svg'
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

export const activeCustomIcon = new Icon({
  iconUrl: UrlMarker.Active,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});


export enum NameSpace {
  App = 'APP',
  OfferList = 'OFFER_LIST',
  Offer = 'OFFER',
  Review = 'REVIEW',
  Favorite = 'FAVORITE',
  User = 'USER',
  Data = 'Data'
}

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const sortType = [
  SortType.Popular,
  SortType.PriceLowToHigh,
  SortType.PriceHighToLow,
  SortType.TopRatedFirst
] as const;
