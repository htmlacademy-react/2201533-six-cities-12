import FavoritesCity from '../favorites-city/favorites-city';
import {useAppSelector} from '../../../hooks';
import {selectFavoritesCities} from '../../../store/favorites/favorites-selectors';

export default function FavoritesLocations({count}: {count: number}): JSX.Element {
  const cities = useAppSelector(selectFavoritesCities);
  if (count === 0) {
    return (
      <div className="favorites__status-wrapper" data-testid={'favorite-locations'}>
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future
          trips.
        </p>
      </div>
    );
  }
  return (
    <ul className="favorites__list" data-testid={'favorite-locations'}>
      {cities.map((id) => (
        <FavoritesCity cityID={id} key={id}/>
      ))}
    </ul>
  );
}
