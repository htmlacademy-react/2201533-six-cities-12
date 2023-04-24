import {Link} from 'react-router-dom';
import {AppRoute} from '../../../settings';
import PlaceCard from '../../place-card/place-card';
import {useAppSelector} from '../../../hooks';
import {selectCityNameByID} from '../../../store/city-process/city-process-selectors';
import {makeSelectIFavoritesByCity} from '../../../store/favorites/favorites-selectors';

export default function FavoritesCity({cityID}: {cityID: number}): JSX.Element {
  const city = useAppSelector((state) => selectCityNameByID(state, cityID));
  const favoritesSelector = makeSelectIFavoritesByCity();
  const favorites = useAppSelector((state) => favoritesSelector(state, cityID));
  return (
    <li className="favorites__locations-items" data-testid={'favorites-city'}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.Root}${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favorite) => <PlaceCard {... favorite} key={favorite.id}/>)}
      </div>
    </li>
  );
}
