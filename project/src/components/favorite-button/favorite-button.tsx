import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postFavorite} from '../../store/api-actions';
import {getIsAuth} from '../../store/user-process/user-selectors';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../settings';
import {activateCard} from '../../store/city-process/city-process';
import {NO_ACTIVE_CARD} from '../../consts/place-card-consts';
type FavoriteButtonProps = {
  id: number;
  isFavorite: boolean;
  caption: string;
  width: string;
  height: string;
  place: string;
}

export default function FavoriteButton({id, isFavorite, caption, width, height, place}: FavoriteButtonProps): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const [isCheck, setFavorite] = useState(isFavorite);
  const onFavorite = (evt: React.MouseEvent) => {
    console.log('click');
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
