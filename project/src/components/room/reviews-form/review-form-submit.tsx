import React from 'react';
import {useAppSelector} from '../../../hooks';
import {selectBlockReviewForm} from '../../../store/offer/offer-selectors';

export default function ReviewFormSubmit({isDisabled}: {isDisabled: boolean}): JSX.Element {
  const isBlock = useAppSelector(selectBlockReviewForm);
  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={isDisabled || isBlock}
    >Submit
    </button>
  );
}
