import React, { useRef } from 'react';
import { City, } from '../../const';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offers } from '../../types/offer';
import { getActiveCityLocation } from '../utils/utils';
import useChangeLocation from '../../hooks/useChangeLocation';
import useMarker from '../../hooks/useMarker';

type Props = {
    setAdditionalClass: string;
    activeCity: City;
    activeCityOffers: Offers;
  };

function Map(props: Props): JSX.Element {
  const { setAdditionalClass, activeCity, activeCityOffers } = props;
  const activeCityLocation = getActiveCityLocation(activeCity, activeCityOffers);
  const mapRef = useRef(null);
  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);
  const map = useMap(mapRef, activeCityLocation);

  useChangeLocation(
    prevActiveCityRef,
    prevMarkersRef,
    activeCity,
    activeCityLocation,
    map
  );

  useMarker(prevMarkersRef, activeCityOffers, map);

  return (
    <section
      className={`${setAdditionalClass} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
