import {useAppSelector} from '../../hooks';
import FavoritesMain from '../../components/favorites/main/favorites-main';
import {selectFavoritesData} from '../../store/favorites/favorites-selectors';
import Loading from '../loading/loading';
import useFetchFavorites from '../../hooks/useFetchFavorites';
import Header from '../../components/header/header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../settings';

export default function Favorites(): JSX.Element{
  useFetchFavorites();
  const {count, isLoading} = useAppSelector(selectFavoritesData);
  if (isLoading){
    return <Loading/>;
  }
  return(
    <div className={`page${count ? '' : ' page--favorites-empty'}`}>
      <Header/>
      <FavoritesMain/>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
