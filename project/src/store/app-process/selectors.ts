import { City, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getActiveCity = (state: State): City => state[NameSpace.App].activeCity;
