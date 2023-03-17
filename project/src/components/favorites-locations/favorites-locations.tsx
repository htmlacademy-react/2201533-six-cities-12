import {PlaceData} from '../../types/types';
import FavoritesCity from '../favorites-city/favorites-city';
import {CITIES} from '../../mocs/cities';

export type FavoritesProps = {
  offers: PlaceData[];
  count: number;
}

export default function FavoritesLocations({offers, count}: FavoritesProps): JSX.Element {
  if (count === 0) {
    return (
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future
          trips.
        </p>
      </div>
    );
  }
  const cities = Array.from(new Set<number>(Array.from(offers, (element) => element.city)));
  return (
    <ul className="favorites__list">
      {cities.map((element) => (
        <FavoritesCity offers={offers.filter((offer) => offer.city === element)}
          city={CITIES[element].name}
          key={element}
        />))}
    </ul>
  );
}
