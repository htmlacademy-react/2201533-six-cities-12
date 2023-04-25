import React from 'react';
import {useAppSelector} from '../../../hooks';
import {selectDisabledSubmit} from '../../../store/offer/offer-selectors';

export default function ReviewFormSubmit(): JSX.Element {
  const disabled = useAppSelector(selectDisabledSubmit);
  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={disabled}
    >Submit
    </button>
  );
}
