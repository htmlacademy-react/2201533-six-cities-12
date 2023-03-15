import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import LocationsTabs from '../../components/locations-tabs/locations-tabs';
import {CITIES} from '../../mocs/cities';
import Places from '../../components/places/places';
import {OFFERS} from '../../mocs/offers';
import NotFound from '../not-found/not-found';

export default function CityPage() : JSX.Element {
  const cityName: string = useParams().city as string;
  const cityIndex = CITIES.findIndex((element) => element.name === cityName);
  if (cityIndex < 0) {
    return <NotFound />;
  }
  const citiesOffers = OFFERS.filter((element) => element.city === cityIndex);
  const placesCount = citiesOffers.length;
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index${placesCount ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs/>
        <div className="cities">
          <Places city={CITIES[cityIndex]} count={placesCount} offers={citiesOffers}/>
        </div>
      </main>
    </div>);
}
