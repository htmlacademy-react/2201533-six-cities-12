import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import {MAX_IMAGES} from '../../settings';
import RoomGallery from '../../components/room/room-gallery/room-gallery';
import RoomContainer from '../../components/room/room-cotainer/room-container';
import PlaceCard from '../../components/place-card/place-card';
import PlacesMap from '../../components/map/placesMap';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Loading from '../loading/loading';
import {fetchOffer} from '../../store/api-actions';
import {useEffect, useRef} from 'react';
import {selectRoomData} from '../../store/offer/offer-selectors';

export default function Room(): JSX.Element{
  const id: number = parseInt(useParams().id as string, 10);
  const isFetched = useRef<boolean>(false);
  const dispatch = useAppDispatch();
  const {isLoading, offer, near} = useAppSelector(selectRoomData);
  useEffect(() => {
    if (!isFetched.current){
      dispatch(fetchOffer(id));
      isFetched.current = true;
    }
  }, [id]);
  if (isLoading){
    return <Loading/>;
  }
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
          <PlacesMap {... {
            className: 'property',
            center: offer.location,
            points: Array.from(near, (nearOffer) => ({
              id: nearOffer.id,
              location: nearOffer.location
            })),
            currentPoint: {
              id: offer.id,
              location: offer.location
            }
          }}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {near.map((nearOffer) => <PlaceCard {... nearOffer} key={nearOffer.id}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>);
}
