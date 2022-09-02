import { Icon } from 'leaflet';

export const TOAST_TYPE = 'success';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorite = '/favorites',
  Property = '/offer',
  NotFound = '*',
}

export enum APIRoute {
  Offer = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = 'nearby',
  Comment = '/comments',
  Favorite = '/favorite'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

export enum MapClass {
  Main = 'cities__map map',
  Property = 'property__map map'
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

export const ImageSize = {
  Big: {
    height: 200,
    width: 260,
  },
  Small: {
    height: 110,
    width: 150,
  }
} as const;

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

export const inputRatingOption = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' },
] as const;

export const UrlMarker = {
  Default: 'img/pin.svg',
  Active: 'img/pin-active.svg'
} as const;

export const IconParameter = {
  Size: {
    x: 27,
    y: 39
  },
  Anchor: {
    x: 13.5,
    y: 39
  }
} as const;

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const cityTitle = [
  City.Paris,
  City.Cologne,
  City.Brussels,
  City.Amsterdam,
  City.Hamburg,
  City.Dusseldorf
] as const;

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

export const TextLength = {
  Min: 50,
  Max: 300
} as const;

export const ButtonName = {
  Submit: 'Submit',
  SignIn: 'Sign in',
  Sending: 'Sending...',
};

export const Timer = {
  OfferCard: 500,
  FormReview: 2000,
  Login: 2000,
  Logout: 3000,
  ToastClose: 3000,
  Favorite: 2500
} as const;

export const Pattern = {
  Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  Password: /^(?=.*[A-Za-z])(?!.* )(?=.*\d).{1,}$/
};

export const ToastText = {
  SuccessLogged: 'You are successfully logged in!',
  ReviewAdded: 'Review successfully added!'
} as const;

export const LogoutText = {
  SignOut: 'Sign out',
  Exiting: 'Exiting...'
} as const;

export const FavoriteAction = {
  Add: 1,
  Delete: 0
} as const;

export const FavoriteActionInfo = {
  Add: 'Successfully added to favorite!',
  Removed: 'Successfully removed from favorite!',
  Loading: 'Please wait...',
} as const;

export const RequestStatus = {
  Fulfilled: 'fulfilled',
  Rejected: 'rejected'
} as const;

export const ValidationMessage = {
  Email: {
    Required: 'Must be E-mail (e.g. name@example.com)',
    Pattern: 'Enter valid E-mail (e.g. name@example.com)',
    Title: 'Must be E-mail (e.g. name@example.com)',
  },
  Password: {
    Required: 'Must be entered Password',
    Pattern: 'Password must contain Letters and Numbers. Min 2 chatacters. No Spaces.',
    Title: 'Password must contain Letters and Numbers. Min 2 chatacters. No Spaces.',
  }
} as const;

export const ImageLimit = {
  Start: 0,
  End: 6
} as const;
