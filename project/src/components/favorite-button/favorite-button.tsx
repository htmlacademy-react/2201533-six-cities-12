import React from 'react';
import {useAppDispatch} from '../../hooks';
import {postFavorite} from '../../store/api-actions';
type FavoriteButtonProps = {
  id: number;
  isFavorite: boolean;
  caption: string;
  width: string;
  height: string;
  place: string;
}

export default function FavoriteButton({id, isFavorite, caption, width, height, place}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  //const [isCheck, setFavorite] = useState(isFavorite);
  const onFavorite = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(postFavorite({hotelId: id, status: !isFavorite}));
    //setFavorite(!isCheck);
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
