import LocationsTabs from '../locations-tabs/locations-tabs';
import Places from '../places/places';
import {selectOffersCount} from '../../../store/offers/offers-selectors';
import {useAppSelector} from '../../../hooks';

export default function Main({id}: {id: number}): JSX.Element {
  const placesCount = useAppSelector((state) => selectOffersCount(state, id));
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
