import { store } from '../store/index';
import { Offers } from './offer';
import { City } from '../const';

// Правильно ли описал тип таким образом ?
export type InitialState = {
  activeCity: City;
  offers: Offers;
}

// Если я уже описал тип InitialState, то уже нет смысла использовать ReturnType ?
export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
