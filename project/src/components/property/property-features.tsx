import React from 'react';
import { Offer } from '../../types/offer';
import { capitalizeFirstLetter } from '../utils/utils';

type Props = {
    offer: Offer
  }

const PropertyFeatures: React.FC<Props> = ({ offer }) => {
  const offerType = capitalizeFirstLetter(offer.type);

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {offerType}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${offer.bedrooms} Bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${offer.maxAdults} adults`}
      </li>
    </ul>
  );
};

export default PropertyFeatures;
