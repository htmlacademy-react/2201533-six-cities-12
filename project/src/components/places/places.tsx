import SortingForm from '../sorting-form/sorting-form';
import PlaceCard from '../place-card/place-card';
import {PlacesProps} from '../../types/types';

export default function Places({city, count, offers}: PlacesProps): JSX.Element {

  if (count > 0) {
    const title = `${count} places to stay in ${city}`;
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{title}</b>
          <SortingForm/>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((place) => <PlaceCard {... place } key={place.id}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    );
  }
  const emptyTitle = `We could not find any property available at the moment in ${city}`;
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
