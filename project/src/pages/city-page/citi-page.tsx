import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import {CITIES} from '../../store/cities';
import NotFound from '../not-found/not-found';
import {store} from '../../store';
import {changeCity} from '../../store/city-process/city-process';
import Main from '../../components/offers/main/main';
import {getOffers} from '../../store/offers/offers-selectors';
import {useAppSelector} from '../../hooks';

export default function CityPage() : JSX.Element {
  const cityName: string = useParams().city as string;
  const index = CITIES.findIndex((element) => element.name === cityName);
  const offers = useAppSelector(getOffers);
  if (index < 0) {
    return <NotFound />;
  }
  store.dispatch(changeCity({index, offers}));
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main />
    </div>);
}
