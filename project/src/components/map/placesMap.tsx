import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {activeMapMarker, defaultMapMarker, NameSpace} from '../../settings';
import {MapLocation, PlacePoint} from '../../types/types';
import {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector} from '../../hooks';
import {RootState} from '../../store';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
import useMarkers, {Markers} from '../../hooks/useMarkers';

export interface MapAttributes {
  center: MapLocation;
  points: PlacePoint[];
  currentPoint?: PlacePoint;
}

interface MapProps extends MapAttributes {
  className: string;
}

export default function PlacesMap({className, center, points, currentPoint}: MapProps): JSX.Element {
  const activeCard = useRef(NO_ACTIVE_CARD);
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  const markers = useMarkers(map,{center, points, currentPoint});
  //markers.current = useMarkers(map,{center, points, currentPoint});
  console.log(markers);
  useAppSelector((state: RootState) => {
    console.log('use selector');
    console.log(markers);
    console.log(activeCard);
    console.log(state[NameSpace.City].activeCard);
    if (!markers || activeCard.current === state[NameSpace.City].activeCard){
      return;
    }
    const marker = state[NameSpace.City].activeCard === NO_ACTIVE_CARD ?
      markers.get(activeCard.current) as Marker : markers.get(state[NameSpace.City].activeCard) as Marker;

    console.log(marker);
    const icon = state[NameSpace.City].activeCard === NO_ACTIVE_CARD ? defaultMapMarker : activeMapMarker;
    marker.setIcon(icon);
    activeCard.current = state[NameSpace.City].activeCard;
    console.log(state[NameSpace.City].activeCard);
  });

  // useEffect(() => {
  //   if (map){
  //     map.setView({
  //       lat: center.latitude,
  //       lng: center.longitude
  //     });
  //     points.forEach((point) => {
  //       const marker = new Marker({
  //         lat: point.location.latitude,
  //         lng: point.location.longitude
  //       });
  //       marker
  //         .setIcon(defaultMapMarker)
  //         .addTo(map);
  //       markers.set(point.id, marker);
  //     });
  //     if (currentPoint){
  //       const currentMarker = new Marker({
  //         lat: currentPoint.location.latitude,
  //         lng: currentPoint.location.longitude
  //       });
  //       currentMarker
  //         .setIcon(activeMapMarker)
  //         .addTo(map);
  //     }
  //   }
  // }, [map, points, center]);
  return (
    <section className={`${className}__map map`} ref={mapRef}></section>
  );
}
