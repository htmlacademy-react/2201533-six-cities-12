import {CardStyles} from '../../types/types';
import {useLocation, Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../settings';
import React from 'react';
import RatingStars from '../rating-stars/rating-stars';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteButton from '../favorite-button/favorite-button';
import {store} from '../../store';
import {activateCard} from '../../store/actions';
import {FavoritesCardStyles, NO_ACTIVE_CARD, OffersCardStyles, RoomCardStyles} from '../../consts/place-card-consts';
import {PlaceData} from '../../types/place-data-types';

export default function PlaceCard(place: PlaceData): JSX.Element{
  const {id, price, features, title, isPremium, rating, previewImage, isFavorite} = place;
  const {type} = features;
  const path = useLocation().pathname;
  const params = useParams();
  let styles: CardStyles;
  switch (path){
    case `${AppRoute.Room}/${params.id as string}`: styles = RoomCardStyles;
      break;
    case AppRoute.Favorites: styles = FavoritesCardStyles;
      break;
    default: styles = OffersCardStyles;
  }
  const needSetMouseEvent = styles === OffersCardStyles;
  return (
    <article className={styles.ArticleClass}
      onMouseEnter={needSetMouseEvent ? () => store.dispatch(activateCard(id)) : undefined}
      onMouseLeave={needSetMouseEvent ? () => store.dispatch(activateCard(NO_ACTIVE_CARD)) : undefined}
    >
      {isPremium && <PremiumMark className='place-card'/>}
      <div className={styles.WrapperClass}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width={styles.ImgWidth} height={styles.ImgHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={styles.InfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price} `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton isFavorite={isFavorite} caption={styles.BookmarkCaption} width={'18'} height={'19'} place={'place-card'}/>
        </div>
        <div className="place-card__rating rating">
          <RatingStars rating={rating} className={'place-card__stars rating__stars'}/>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
