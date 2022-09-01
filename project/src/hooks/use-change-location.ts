import { Map, Marker } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { City } from '../const';
import { Location } from '../types/offer';

const useChangeLocation = (
  prevActiveCityRef: MutableRefObject<City>,
  prevMarkersRef: MutableRefObject<Marker[]>,
  activeCity: City,
  activeCityLocation: Location,
  map: Map | null
): void => {

  useEffect(() => {
    if (prevActiveCityRef.current !== activeCity && map) {
      prevActiveCityRef.current = activeCity;

      prevMarkersRef.current.forEach((marker) => marker.remove());

      prevMarkersRef.current = [];

      map.setView(
        {
          lat: activeCityLocation.latitude,
          lng: activeCityLocation.longitude
        },
        activeCityLocation.zoom
      );
    }
  }, [prevActiveCityRef, prevMarkersRef, activeCity, activeCityLocation, map]);
};

export default useChangeLocation;
