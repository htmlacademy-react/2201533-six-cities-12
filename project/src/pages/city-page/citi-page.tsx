import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import {CITIES} from '../../store/cities';
import NotFound from '../not-found/not-found';
import {store} from '../../store';
import {changeCity} from '../../store/actions';
import Main from '../../components/offers/main/main';

export default function CityPage() : JSX.Element {
  const cityName: string = useParams().city as string;
  const cityIndex = CITIES.findIndex((element) => element.name === cityName);
  if (cityIndex < 0) {
    return <NotFound />;
  }
  store.dispatch(changeCity(cityIndex));
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main />
    </div>);
}
