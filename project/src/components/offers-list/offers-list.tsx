import { Fragment, useState } from 'react';
import { PageCardClass } from '../../const';
import { Offers } from '../../types/offer';
import Card from '../app/card/card';

type Props = {
    offers: Offers;
    cardClass: PageCardClass;
  };

function OffersList({ offers, cardClass }: Props): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Заглушка для переменной activeCard
  if (activeCard === undefined) {
    return <div />;
  }

  return (
    <Fragment>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          cardClass={cardClass}
          onActive={() => setActiveCard(offer.id)}
          onInactive={() => setActiveCard(null)}
        />)
      )}
    </Fragment>
  );
}

export default OffersList;
