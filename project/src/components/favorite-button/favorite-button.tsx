import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postFavorite} from '../../store/api-actions';
import {selectIsAuth} from '../../store/user-process/user-selectors';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../settings';
import {selectIsFavorite} from '../../store/offers/offers-selectors';
type FavoriteButtonProps = {
  id: number;
  caption: string;
  width: string;
  height: string;
  place: string;
}

export default function FavoriteButton({id, caption, width, height, place}: FavoriteButtonProps): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFavorite = useAppSelector((state) => selectIsFavorite(state, id));
  const onFavorite = (evt: React.MouseEvent) => {
    if (isAuth){
      dispatch(postFavorite({hotelId: id, status: !isFavorite}));
    } else {
      navigate(AppRoute.Login);
    }
  };
  return (
    <button
      className={`${place}__bookmark-button ${isFavorite ? `${place}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={onFavorite}
    >
      <svg className={`${place}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{caption}</span>
    </button>
  );
}
