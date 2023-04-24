import React from 'react';
import {STARS_COUNT} from '../../../settings';

type RatingStarProps = {
  rating: number; className: string;
}

export default function RatingStars({rating, className}: RatingStarProps): JSX.Element {
  return (
    <div className={className}>
      <span style={{width: `${Math.round(rating) * 100 / STARS_COUNT}%`}} data-testid={'mark'}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
