import Header from '../../components/header/header';
import FavoritesLocations from '../../components/favorites-locations/favorites-locations';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../settings';
import {OFFERS} from '../../mocs/offers';

export default function Favorites(): JSX.Element{
  const favorites = OFFERS;//.filter((element) => element.isFavorite);
  const count = favorites.length;
  return(
    <div className={`page${count ? '' : ' page--favorites-empty'}`}>
      <Header/>
      <main className={`page__main page__main--favorites${count ? '' : ' page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${count ? '' : ' favorites--empty'}`}>
            <h1 className="favorites__title">{count ? 'Saved listing' : 'Favorites (empty)'}</h1>
            <FavoritesLocations offers={favorites} count={count}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
