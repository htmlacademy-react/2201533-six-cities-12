import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {activeMapMarker, defaultMapMarker, NameSpace} from '../../settings';
import {MapLocation, PlacePoint} from '../../types/types';
import {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';

type MapProps = {
  className: string;
  center: MapLocation;
  points: PlacePoint[];
  currentPoint?: PlacePoint;
}

export default function PlacesMap({className, center, points, currentPoint}: MapProps): JSX.Element {
  const prevActiveCard = useRef(NO_ACTIVE_CARD);
  //let activeCard: number = store.getState().activeCard;
  const markers = new Map<number, Marker>();
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  prevActiveCard.current = useSelector((state: RootState) => {
    console.log(prevActiveCard.current);
    const activeCard = state[NameSpace.City].activeCard;
    console.log(activeCard);
    if (!map || prevActiveCard.current === activeCard){
      return prevActiveCard.current;
    }
    const marker = activeCard === NO_ACTIVE_CARD ?
      markers.get(prevActiveCard.current) as Marker : markers.get(activeCard) as Marker;
    const icon = activeCard === NO_ACTIVE_CARD ? defaultMapMarker : activeMapMarker;
    marker.setIcon(icon);
    return activeCard;
  });
  useEffect(() => {
    if (map){
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
    }
  }, [map, points, center]);
  return (
    <section className={`${className}__map map`} ref={mapRef}></section>
  );
}
