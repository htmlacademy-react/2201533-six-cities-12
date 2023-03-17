import {MutableRefObject, useState, useEffect} from 'react';
import {Map, TileLayer} from 'leaflet';
import {MapLocation} from '../types/types';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: MapLocation): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  let i = 0;
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      i++;
      if (i > 1){
        return;
      }
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, location]);
  return map;
}
