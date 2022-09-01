import { Map, Marker } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { activeCustomIcon, defaultCustomIcon } from '../const';
import { Offers } from '../types/offer';

const useAddMarker = (
  prevMarkersRef: MutableRefObject<Marker[]>,
  activeCityOffers: Offers,
  map: Map | null,
  activeCardId: number | null
): void => {

  useEffect(() => {
    if (map) {
      activeCityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            activeCardId !== null && offer.id === activeCardId
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        prevMarkersRef.current.push(marker);
      });
    }
  }, [prevMarkersRef, activeCityOffers, map, activeCardId]);
};

export default useAddMarker;
