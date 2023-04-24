import {CardStyles} from '../../types/types';
import {useLocation, Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../settings';
import React from 'react';
import RatingStars from '../accessories/rating-stars/rating-stars';
import PremiumMark from '../accessories/premium-mark/premium-mark';
import FavoriteButton from '../accessories/favorite-button/favorite-button';
import {activateCard} from '../../store/map-process/map-process';
import {FavoritesCardStyles, NO_ACTIVE_CARD, OffersCardStyles, RoomCardStyles} from '../../consts/place-card-consts';
import {PlaceData} from '../../types/place-data-types';
import {useAppDispatch} from '../../hooks';

export default function PlaceCard(place: PlaceData): JSX.Element{
  const {id, price, features, title, isPremium, rating, previewImage} = place;
  const {type} = features;
  const path = useLocation().pathname;
  const params = useParams();
  const dispatch = useAppDispatch();
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
      onMouseEnter={needSetMouseEvent ? () => dispatch(activateCard(id)) : undefined}
      onMouseLeave={needSetMouseEvent ? () => dispatch(activateCard(NO_ACTIVE_CARD)) : undefined}
      data-testid={'place-card'}
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
          <FavoriteButton {...{id, caption: styles.BookmarkCaption, width: '18', height: '19', place: 'place-card'}}/>
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
