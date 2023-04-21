import {ReviewsFormStars} from './reviews-form-stars';
import ReviewFormText from './review-form-text';
import ReviewFormSubmit from './review-form-submit';
import React from 'react';
import {postComment} from '../../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {selectFailed} from '../../../store/offer/offer-selectors';
import {useRef} from 'react';

export default function ReviewsForm({offerId}: {offerId: number}): JSX.Element {
  const dispatch = useAppDispatch();
  const {isReset} = useAppSelector(selectFailed);
  const isFirst = useRef(true);
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(postComment(offerId));
  };
  if (isReset) {
    isFirst.current = true;
  }
  return (
    <form
      className="reviews__form form"
      action="src/components/room/reviews-form/reviews-form#"
      method="post"
      onSubmit={onSubmit}
    >
      <ReviewsFormStars />
      <ReviewFormText />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <ReviewFormSubmit id={offerId}/>
      </div>
    </form>
  );
}
