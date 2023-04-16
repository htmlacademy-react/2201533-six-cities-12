import LocationsTabs from '../locations-tabs/locations-tabs';
import Places from '../places/places';
import {selectOffersCount} from '../../../store/city-process/city-process-selectors';
import {useAppSelector} from '../../../hooks';

export default function Main(): JSX.Element {
  const placesCount = useAppSelector(selectOffersCount);
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
