import {useEffect, useRef} from 'react';
import {activeMapMarker, defaultMapMarker} from '../settings';
import {LeafletMap} from './useMap';
import {Marker} from 'leaflet';
import {MapAttributes} from '../components/map/placesMap';

export type Markers = Map<number, Marker> | null

export default function useMarkers(map: LeafletMap, {center, points, currentPoint}: MapAttributes): Markers{
  const returned = useRef<Markers>(null);
  console.log('use markers');
  console.log(returned.current);
  useEffect(() => {
    console.log('use effect');
    if (map){
      const markers = new Map<number, Marker>();
      map.setView({
        lat: center.latitude,
        lng: center.longitude
      });
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        marker
          .setIcon(defaultMapMarker)
          .addTo(map);
        markers.set(point.id, marker);
      });
      if (currentPoint){
        const currentMarker = new Marker({
          lat: currentPoint.location.latitude,
          lng: currentPoint.location.longitude
        });
        currentMarker
          .setIcon(activeMapMarker)
          .addTo(map);
      }
      returned.current = markers;
    }
  }, [map, points, center]);
  console.log(returned.current);
  return returned.current;
}
