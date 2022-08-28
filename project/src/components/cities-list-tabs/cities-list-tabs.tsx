import { MouseEvent } from 'react';
import { city, City } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/actions';

type Props = {
  activeCity: City;
}

function CitiesListTabs({ activeCity }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {city.map((cityName) => (
        <li
          key={cityName}
          className="locations__item"
        >
          <a
            onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
              evt.preventDefault();
              dispatch(changeCity(cityName));
            }}
            className={`locations__item-link tabs__item ${activeCity === cityName ? 'tabs__item--active' : ''}`}
            href="/"
          >
            <span>{cityName}</span>
          </a>
        </li>)
      )}
    </ul>
  );
}

export default CitiesListTabs;
