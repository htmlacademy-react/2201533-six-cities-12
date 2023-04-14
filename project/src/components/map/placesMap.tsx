import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {activeMapMarker, defaultMapMarker} from '../../settings';
import {MapLocation, PlacePoint} from '../../types/types';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
import {getActiveCard} from '../../store/city-process/city-process-selectors';

export interface MapAttributes {
  center: MapLocation;
  points: PlacePoint[];
  currentPoint?: PlacePoint;
}

interface MapProps extends MapAttributes {
  className: string;
}

const setIcon = (card: number, marks: Map<number, Marker>, icon: Icon) => {
  if (marks.has(card)){
    const marker = marks.get(card) as Marker;
    marker.setIcon(icon);
  }
};

export type Markers = Map<number, Marker> | null

export default function PlacesMap({className, center, points, currentPoint}: MapProps): JSX.Element {
  const activeCard = useRef(NO_ACTIVE_CARD);
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  const markers = useRef<Markers>(null);
  const activatedCard = useAppSelector(getActiveCard);
  const changeMarkers = (card: number) => {
    if (markers.current && activeCard.current !== card) {
      setIcon(activeCard.current, markers.current as Map<number, Marker>, defaultMapMarker);
      setIcon(card, markers.current as Map<number, Marker>, activeMapMarker);
      activeCard.current = card;
    }
  };
  changeMarkers(activatedCard);
  useEffect(() => {
    if (map){
      map.setView({
        lat: center.latitude,
        lng: center.longitude
      });
      if (!markers.current) {
        markers.current = new Map<number, Marker>();
      }
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });
        marker
          .setIcon(defaultMapMarker)
          .addTo(map);
        (markers.current as Map<number, Marker>).set(point.id, marker);
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
    }
  }, [map, points, center]);
  return (
    <section className={`${className}__map map`} ref={mapRef}></section>
  );
}
