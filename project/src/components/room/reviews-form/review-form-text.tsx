import {ReviewLength} from '../../../settings';
import React, {useState} from 'react';
import {useAppSelector} from '../../../hooks';
import {
  selectBlockReviewForm,
  selectPostCommentFulfill,
} from '../../../store/offer/offer-selectors';

export default function ReviewFormText({onInputText}: {onInputText: (text: string) => void}): JSX.Element {
  const [text, setText] = useState('');
  if (useAppSelector(selectPostCommentFulfill)) {
    setText('');
  }
  const isBlock = useAppSelector(selectBlockReviewForm);
  const onInput = (evt: React.FormEvent<HTMLTextAreaElement>) => {
    const comment = evt.currentTarget.value;
    setText(comment);
    onInputText(comment);
  };
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onInput={onInput} maxLength={ReviewLength.Max}
      value={text}
      disabled={isBlock}
    />
  );
}
