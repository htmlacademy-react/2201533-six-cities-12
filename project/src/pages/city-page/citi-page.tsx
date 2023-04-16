import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import NotFound from '../not-found/not-found';
import {changeCity} from '../../store/city-process/city-process';
import Main from '../../components/offers/main/main';
import {getOffers} from '../../store/offers/offers-selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectIDByName} from '../../store/city-process/city-process-selectors';

export default function CityPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const cityName: string = useParams().city as string;
  const index = useAppSelector((state) => selectIDByName(state, cityName));
  const offers = useAppSelector(getOffers);
  if (index < 0) {
    return <NotFound />;
  }
  dispatch(changeCity({index, offers}));
  return (
    <div className="page page--gray page--main">
      <Header/>
      <Main />
    </div>);
}
