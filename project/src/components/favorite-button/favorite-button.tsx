import React from 'react';
type FavoriteButtonProps = {
  isFavorite: boolean; caption: string; width: string; height: string; place: string;
}

export default function FavoriteButton({isFavorite, caption, width, height, place}: FavoriteButtonProps): JSX.Element {
  return (
    <button className={`${place}__bookmark-button ${isFavorite ? `${place}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${place}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{caption}</span>
    </button>
  );
}
