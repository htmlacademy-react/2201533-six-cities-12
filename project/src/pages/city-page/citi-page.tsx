import {PlacesProps} from '../../types/types';
import {useParams, Navigate} from 'react-router-dom';
import Header from '../../components/header/header';
import LocationsTabs from '../../components/locations-tabs/locations-tabs';
import {CITIES} from '../../mocs/cities';
import {AppRoute} from '../../setings';
import Places from '../../components/places/places';
import {OFFERS} from '../../mocs/offers';


export default function CityPage() : JSX.Element {
  const params = useParams();
  const cityName: string = params.city as string;
  const cityIndex = CITIES.findIndex((element) => element.name === cityName);
  if (cityIndex < 0) {
    return <Navigate to={AppRoute.Root}/>;
  }
  const citiesOffers = OFFERS.filter((element) => element.city === cityIndex);
  const placesCount = citiesOffers.length;
  const props: PlacesProps = {
    city: cityName,
    count: placesCount,
    offers: citiesOffers
  };
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index${placesCount ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs/>
        <div className="cities">
          <Places {... props}/>
        </div>
      </main>
    </div>);
}
