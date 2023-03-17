import SortingForm from '../sorting-form/sorting-form';
import PlaceCard from '../place-card/place-card';
import {City, PlaceData} from '../../types/types';
import {useState} from 'react';
import Map from '../map/map';

export type PlacesProps = {
  city: City;
  count: number;
  offers: PlaceData[];
};

export default function Places({city, count, offers}: PlacesProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(-1);
  const onActiveCard = (id: number) => setActiveCard(id);
  if (count > 0) {
    const title = `${count} places to stay in ${city.name}`;
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <p className="visually-hidden">{activeCard}</p>
          <b className="places__found">{title}</b>
          <SortingForm/>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((place) => <PlaceCard place={place} onActive= {onActiveCard} key={place.id}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <Map {... {
            className: 'cities',
            center: city.location,
            points: Array.from(offers, (place) => ({
              id: place.id,
              location: place.location
            }))}}
          />
        </div>
      </div>
    );
  }
  const emptyTitle = `We could not find any property available at the moment in ${city.name}`;
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">{emptyTitle}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
