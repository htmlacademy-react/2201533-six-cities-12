import SortingForm from '../sorting-form/sorting-form';
import PlaceCard from '../../place-card/place-card';
import PlacesMap from '../../map/placesMap';
import {useAppSelector} from '../../../hooks';
import {selectCityWithIndex} from '../../../store/city-process/city-process-selectors';
import {selectSortingOffers} from '../../../store/offers/offers-selectors';

export default function Places(): JSX.Element {
  const {city, index} = useAppSelector(selectCityWithIndex);
  const {offers} = useAppSelector((state) => selectSortingOffers(state, index));
  const count = offers.length;
  if (count > 0) {
    const title = `${count} places to stay in ${city.name}`;
    return (
      <div className="cities__places-container container" data-testid={'places'}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{title}</b>
          <SortingForm/>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((place) => <PlaceCard {... place} key={place.id}/>)
            }
          </div>
        </section>
        <div className="cities__right-section">
          <PlacesMap {... {
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
    <div className="cities__places-container cities__places-container--empty container" data-testid={'places'}>
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
