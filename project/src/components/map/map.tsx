import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {defaultMapMarker} from '../../setings';
import {MapLocation, PlacePoint} from '../../types/types';
import {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: string;
  center: MapLocation;
  points: PlacePoint[];
}

export default function Map({className, center, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        marker
          .setIcon(defaultMapMarker)
          .addTo(map);
      });
    }
  }, [map, points]);
  return (
    <section className={`${className}__map map`} ref={mapRef}></section>
  );
}
