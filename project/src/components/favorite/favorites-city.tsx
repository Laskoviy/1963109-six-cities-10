import React from 'react';

type Props = {
  city: string
}


const FavoriteCity: React.FC<Props> = ({ city }) => (
  <div className="favorites__locations locations locations--current">
    <div className="locations__item">

      <a className="locations__item-link link__disabled" href="/">
        <span>{city}</span>
      </a>

    </div>
  </div>
);

export default FavoriteCity;
