import React, { Fragment } from 'react';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offer';
import Card from '../app/card/card';

type Props = {
    offers: Offers;
    cardClass: PageCardClass;
    onActiveCard?: (value: number | null) => void;
  };

const OffersList: React.FC<Props> = ({ offers, cardClass, onActiveCard }) => (
  <Fragment>
    {offers.map((offer) => (
      <Card
        key={offer.id}
        offer={offer}
        cardClass={cardClass}
        onActiveCard={onActiveCard}
      />)
    )}
  </Fragment>
);

export default React.memo(OffersList);
