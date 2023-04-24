import PremiumMark from '../../accessories/premium-mark/premium-mark';
import FavoriteButton from '../../accessories/favorite-button/favorite-button';
import RatingStars from '../../accessories/rating-stars/rating-stars';
import Features from '../features/features';
import RoomInsides from '../room-insides/room-insides';
import RoomHost from '../room-host/room-host';
import Reviews from '../reviews/reviews';
import {PlaceData} from '../../../types/place-data-types';
import {selectHostByID} from '../../../store/offers/offers-selectors';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export default function RoomContainer(offer: PlaceData): JSX.Element {
  const host = useSelector((state: RootState) => selectHostByID(state, offer.hostId));
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium && <PremiumMark className='property'/>}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <FavoriteButton id={offer.id} caption={'To bookmarks'} width={'31'} height={'33'} place={'property'}/>
        </div>
        <div className="property__rating rating">
          <RatingStars rating={offer.rating} className={'property__stars rating__stars'}/>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>
        <Features {... offer.features}/>
        <div className="property__price">
          <b className="property__price-value">{`€${offer.price} `}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <RoomInsides insides={offer.goods}/>
        <RoomHost host={host}/>
        <Reviews id={offer.id}/>
      </div>
    </div>
  );
}
