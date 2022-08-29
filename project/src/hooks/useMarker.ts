import { Map, Marker } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { defaultCustomIcon } from '../const';
import { Offers } from '../types/offer';

function useMarker(
  prevMarkersRef: MutableRefObject<Marker[]>,
  activeCityOffers: Offers,
  map: Map | null
): void {

  useEffect(() => {
    if (map) {
      activeCityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            defaultCustomIcon
          )
          .addTo(map);

        prevMarkersRef.current.push(marker);
      });
    }
  }, [prevMarkersRef, activeCityOffers, map]);
}

export default useMarker;
