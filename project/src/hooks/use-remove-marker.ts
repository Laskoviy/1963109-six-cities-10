import { Map, Marker } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';

const useRemoveMarker = (
  prevMarkersRef: MutableRefObject<Marker[]>,
  map: Map | null,
  activeCardId: number | null,
  prevActiveCardId: MutableRefObject<number | null>,
): void => {

  useEffect(() => {
    if (prevActiveCardId.current !== activeCardId && map) {
      prevMarkersRef.current.forEach((marker) => marker.remove());

      prevMarkersRef.current = [];
      prevActiveCardId.current = activeCardId;
    }
  }, [prevMarkersRef, map, activeCardId, prevActiveCardId]);
};

export default useRemoveMarker;
