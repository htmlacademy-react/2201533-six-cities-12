import {FavoritesCityProps} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../setings';
import PlaceCard from '../place-card/place-card';

export default function FavoritesCity({offers, city}: FavoritesCityProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`${AppRoute.Root}${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((element) => <PlaceCard {... {place: element, onActive: null}} key={element.id}/>)}
      </div>
    </li>
  );
}
