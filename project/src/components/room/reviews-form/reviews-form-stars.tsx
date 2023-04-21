import React, {Fragment, useState} from 'react';
import {STAR_TITLES, STARS_COUNT} from '../../../settings';
import {useAppSelector} from '../../../hooks';
import {selectBlockReviewForm} from '../../../store/offer/offer-selectors';

export function ReviewsFormStars ({onSelectStar}: {onSelectStar: (rating: number) => void}): JSX.Element {
  //const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const isBlock = useAppSelector(selectBlockReviewForm);
  const onClickRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const stars = parseInt(evt.currentTarget.value, 10);
    onSelectStar(stars);
    setRating(stars);
    //dispatch(setRating(parseInt(evt.currentTarget.value, 10)));
  };
  return (
    <Fragment>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STAR_TITLES.map((element, index) => {
          const value = STARS_COUNT - index;
          const id = `${STARS_COUNT - index}-stars`;
          return (
            <Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={id}
                type="radio" onChange={onClickRating}
                disabled={isBlock}
                checked={rating === value}
              />
              <label htmlFor={id} className="reviews__rating-label form__rating-label"
                title={element}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}
