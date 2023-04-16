import FavoritesLocations from '../favorites-locations/favorites-locations';
import {useAppSelector} from '../../../hooks';
import {selectFavoritesCount} from '../../../store/favorites/favorites-selectors';

export default function FavoritesMain(): JSX.Element {
  const count = useAppSelector(selectFavoritesCount);
  return (
    <main className={`page__main page__main--favorites${count ? '' : ' page__main--favorites-empty'}`}>
      <div className="page__favorites-container container">
        <section className={`favorites${count ? '' : ' favorites--empty'}`}>
          <h1 className="favorites__title">{count ? 'Saved listing' : 'Favorites (empty)'}</h1>
          <FavoritesLocations count={count}/>
        </section>
      </div>
    </main>
  );
}
