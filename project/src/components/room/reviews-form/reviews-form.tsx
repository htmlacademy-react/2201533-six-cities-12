import {ReviewsFormStars} from './reviews-form-stars';
import ReviewFormText from './review-form-text';
import ReviewFormSubmit from './review-form-submit';
import React, {useState} from 'react';
import {postComment} from '../../../store/api-actions';
import {useAppDispatch} from '../../../hooks';
//import {selectFailed} from '../../../store/offer/offer-selectors';
import {useRef} from 'react';
import {ReviewLength} from '../../../settings';

export default function ReviewsForm({offerId}: {offerId: number}): JSX.Element {
  const dispatch = useAppDispatch();
  // const {isReset} = useAppSelector(selectFailed);
  // const isFirst = useRef(true);
  const rating = useRef(0);
  const comment = useRef('');
  const [isDisabledSubmit, setIsDisabled] = useState(true);
  const onSelectStar = (stars: number) => {
    rating.current = stars;
    setIsDisabled(!(stars > 0 && comment.current.length > ReviewLength.Min));
  };
  const onInputText = (text: string) => {
    comment.current = text;
    setIsDisabled(!(rating.current > 0 && text.length > ReviewLength.Min));
  };
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(postComment({id: offerId, comment: comment.current, rating: rating.current}));
  };
  // if (isReset) {
  //   isFirst.current = true;
  // }
  return (
    <form
      className="reviews__form form"
      action="src/components/room/reviews-form/reviews-form#"
      method="post"
      onSubmit={onSubmit}
    >
      <ReviewsFormStars {...{onSelectStar}}/>
      <ReviewFormText {...{onInputText}}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and
                      describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <ReviewFormSubmit isDisabled={isDisabledSubmit}/>
      </div>
    </form>
  );
}
