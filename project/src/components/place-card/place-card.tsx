import {CardStyles, PlaceData} from '../../types/types';
import {useLocation, Link, useParams} from 'react-router-dom';
import {AppRoute, FavoritesCardStyles, OffersCardStyles, RoomCardStyles} from '../../setings';
import React from 'react';
import RatingStars from '../rating-stars/rating-stars';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteButton from '../favorite-button/favorite-button';

type PlaceCardProps = {
  place: PlaceData;
  onActive: ((id: number) => void) | null;
}

export default function PlaceCard({place, onActive}: PlaceCardProps): JSX.Element{
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
  return (
    <article className={styles.ArticleClass} onMouseOverCapture={onActive ? () => onActive(id) : undefined}>
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
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
