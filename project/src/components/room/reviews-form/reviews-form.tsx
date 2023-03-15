import {ReviewLength, STAR_TITLES, STARS_COUNT} from '../../../setings';
import React, {Fragment, useEffect, useState} from 'react';

export default function ReviewsForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [isFillReview, setIsFillReview] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [review, setReview] = useState('');

  const onInputText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const textLength = evt.currentTarget.textLength;
    if ((textLength < ReviewLength.Min) === isFillReview){
      setIsFillReview(!isFillReview);
    }
    setReview(evt.currentTarget.value);
  };

  const onChangeRating = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(evt.currentTarget.value, 10);
    if(value !== rating){
      setRating(value);
    }
  };

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  useEffect(() => {
    setDisabledSubmit(!(isFillReview && rating > 0));
  }, [isFillReview, rating]);

  return (
    <form className="reviews__form form" action="src/components/room/reviews-form/reviews-form#" method="post" onSubmit={onSubmit}>
      <p className='visually-hidden'>{review}</p>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STAR_TITLES.map((element, index) => {
          const value = STARS_COUNT - index;
          const id = `${STARS_COUNT - index}-stars`;
          return (
            <Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={id}
                type="radio" onChange={onChangeRating}
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
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={onInputText} maxLength={ReviewLength.Max}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabledSubmit}>Submit</button>
      </div>
    </form>
  );
}
