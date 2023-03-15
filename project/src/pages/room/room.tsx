import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {OFFERS} from '../../mocs/offers';
import NotFound from '../not-found/not-found';
import {MAX_IMAGES, NEAR_OFFERS} from '../../setings';
import RoomGallery from '../../components/room/room-gallery/room-gallery';
import RoomContainer from '../../components/room/room-cotainer/room-container';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import {CITIES} from '../../mocs/cities';

export default function Room(): JSX.Element{
  const id: number = parseInt(useParams().id as string, 10);
  const offer = OFFERS.find((element) => element.id === id);
  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery images={offer.images.slice(0, MAX_IMAGES)}/>
          <RoomContainer {... offer}/>
          <Map {... {
            className: 'property',
            center: CITIES[3].location,
            points: Array.from(NEAR_OFFERS, (offerIndex) => ({
              id: OFFERS[offerIndex].id,
              location: OFFERS[offerIndex].location
            }))
          }}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {NEAR_OFFERS.map((element) => <PlaceCard place={OFFERS[element]} onActive={null} key={OFFERS[element].id}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>);
}
