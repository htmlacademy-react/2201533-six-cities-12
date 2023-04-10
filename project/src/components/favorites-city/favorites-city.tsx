import {Link} from 'react-router-dom';
import {AppRoute} from '../../settings';
import PlaceCard from '../place-card/place-card';
import {PlaceData} from '../../types/place-data-types';

export type FavoritesCityProps = {
  offers: PlaceData[];
  city: string;
}

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
        {offers.map((element) => <PlaceCard {... element} key={element.id}/>)}
      </div>
    </li>
  );
}
