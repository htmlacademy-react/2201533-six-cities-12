import {CardStyles} from '../types/types';

export const OffersCardStyles: CardStyles = {
  ArticleClass: 'cities__card place-card',
  WrapperClass: 'cities__image-wrapper place-card__image-wrapper',
  ImgWidth: '260',
  ImgHeight: '200',
  InfoClass: 'place-card__info',
  BookmarkCaption: 'To bookmarks'
} as const;

export const RoomCardStyles: CardStyles = {
  ArticleClass: 'near-places__card place-card',
  WrapperClass: 'near-places__image-wrapper place-card__image-wrapper',
  ImgWidth: '260',
  ImgHeight: '200',
  InfoClass: 'place-card__info',
  BookmarkCaption: 'To bookmarks'
} as const;

export const FavoritesCardStyles: CardStyles = {
  ArticleClass: 'favorites__card place-card',
  WrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
  ImgWidth: '150',
  ImgHeight: '110',
  InfoClass: 'favorites__card-info place-card__info',
  BookmarkCaption: 'In bookmarks'
} as const;

export const NO_ACTIVE_CARD = -1;
