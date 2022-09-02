import React, { MouseEvent } from 'react';
import { city } from '../../const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveCity } from '../../store/app-process/app-process';
import { getActiveCity } from '../../store/app-process/selectors';

const CitiesTabs: React.FC = () => {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {city.map((cityName) => {
        const isActive = activeCity === cityName;
        const linkClass = classNames('locations__item-link tabs__item', {
          'tabs__item--active': isActive
        });

        return (
          <li
            key={cityName}
            className="locations__item"
          >
            <a
              onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                dispatch(setActiveCity(cityName));
              }}
              className={linkClass}
              href="/"
            >
              <span>{cityName}</span>
            </a>
          </li>
        );
      }
      )}
    </ul>
  );
};

export default CitiesTabs;
