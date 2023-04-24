import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import NotFound from '../not-found/not-found';
import {changeCity} from '../../store/city-process/city-process';
import Main from '../../components/offers/main/main';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectIDByName} from '../../store/city-process/city-process-selectors';

export default function CityPage() : JSX.Element {
  const dispatch = useAppDispatch();
  const cityName: string = useParams().city as string;
  const index = useAppSelector((state) => selectIDByName(state, cityName));
  if (index < 0) {
    return <NotFound />;
  }
  dispatch(changeCity(index));
  return (
    <div className="page page--gray page--main" data-testid="page-main">
      <Header />
      <Main id={index}/>
    </div>);
}
