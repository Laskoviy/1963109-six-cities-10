import React, { useRef } from 'react';
import { City, } from '../../const';
import { Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offers } from '../../types/offer';
import { getActiveCityLocation } from '../utils/utils';
import useChangeLocation from '../../hooks/use-change-location';
import useRemoveMarker from '../../hooks/use-remove-marker';
import useAddMarker from '../../hooks/use-add-marker';

type MapProps = {
  activeCity: City;
  activeCityOffers: Offers;
  activeCardId: number | null;
};


const Map: React.FC<MapProps> = (props) => {
  const { activeCityOffers, activeCity, activeCardId } = props;

  const activeCityLocation = getActiveCityLocation(activeCity, activeCityOffers);

  const mapRef = useRef(null);
  const prevActiveCityRef = useRef<City>(activeCity);
  const prevMarkersRef = useRef<Marker[]>([]);
  const prevActiveId = useRef<number | null>(activeCardId);

  const map = useMap(mapRef, activeCityLocation);

  useRemoveMarker(
    prevMarkersRef,
    map,
    activeCardId,
    prevActiveId
  );

  useChangeLocation(
    prevActiveCityRef,
    prevMarkersRef,
    activeCity,
    activeCityLocation,
    map
  );

  useAddMarker(
    prevMarkersRef,
    activeCityOffers,
    map,
    activeCardId
  );

  return (
    <section className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
