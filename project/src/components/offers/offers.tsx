import { City, PageCardClass } from '../../const';
import { Offers } from '../../types/offer';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';

type Props = {
  offersCount: number;
  activeCityOffers: Offers;
  cardClass: PageCardClass;
  activeCity: City
}

function MainOffers(props: Props): JSX.Element {
  const { offersCount, activeCityOffers, cardClass, activeCity } = props;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">
          {offersCount} places to stay in Amsterdam
        </b>

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by&nbsp;</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <div className="cities__places-list places__list tabs__content">
          <OffersList
            offers={activeCityOffers}
            cardClass={cardClass}
          />
        </div>
      </section>

      <div className="cities__right-section">
        <Map
          setAdditionalClass={'cities__map'}
          activeCity={activeCity}
          activeCityOffers={activeCityOffers}
        />
      </div>

    </div>
  );
}

export default MainOffers;
