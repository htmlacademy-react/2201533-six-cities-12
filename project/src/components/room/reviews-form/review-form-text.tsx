import {ReviewLength} from '../../../settings';
import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {setReview} from '../../../store/offer/offer';
import {selectBlockReviewForm, selectReviewsText} from '../../../store/offer/offer-selectors';

export default function ReviewFormText(): JSX.Element {
  //const dispatch = useAppDispatch();
  //const {isBlock, text} = useAppSelector(selectReviewsText);
  const isBlock = useAppSelector(selectBlockReviewForm);
  const [text, setText] = useState('');
  const onInput = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const comment = evt.currentTarget.value;
    setText(comment);
    onInputText(comment);
    //dispatch(setReview(evt.currentTarget.value));
  };

  //const onInputText = (evt: React.FormEvent<HTMLTextAreaElement>) => {
  //  dispatch(setReview(evt.currentTarget.value));
  };
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onInput={onInputText} maxLength={ReviewLength.Max}
      value={text}
      disabled={isBlock}
    />
  );
}
