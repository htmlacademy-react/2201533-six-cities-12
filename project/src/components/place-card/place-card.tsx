import {PlaceData} from '../../types/types';
import {useLocation, Link} from 'react-router-dom';
import {AppRoute, FavoritesCardStyles, OffersCardStyles} from '../../setings';
import React from 'react';
import RatingStars from '../rating-stars/rating-stars';

export default function PlaceCard({place, onActive}: {place: PlaceData; onActive: ((id: number) => void) | null}): JSX.Element{
  const {id, price, type, title, isPremium, rating, previewImage, isFavorite} = place;
  const styles = useLocation().pathname === AppRoute.Favorites ? FavoritesCardStyles : OffersCardStyles;
  return (
    <article className={styles.ArticleClass} onMouseOverCapture={onActive ? () => onActive(id) : undefined}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={styles.WrapperClass}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={styles.ImgWidth} height={styles.ImgHeight} alt="Place image"/>
        </a>
      </div>
      <div className={styles.InfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price} `}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{styles.BookmarkCaption}</span>
          </button>
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
