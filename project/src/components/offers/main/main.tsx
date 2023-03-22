import LocationsTabs from '../locations-tabs/locations-tabs';
import Places from '../places/places';
import {RootState} from '../../../store';
import {useSelector} from 'react-redux';

export default function Main(): JSX.Element {
  const placesCount = useSelector((state: RootState) => state.offersCount);
  return (
    <main className={`page__main page__main--index${placesCount ? '' : 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <LocationsTabs/>
      <div className="cities">
        <Places />
      </div>
    </main>
  );
}
