import React from 'react';
import {STARS_COUNT} from '../../setings';

type RatingStarProps = {
  rating: number; className: string;
}

export default function RatingStars({rating, className}: RatingStarProps): JSX.Element {
  return (
    <div className={className}>
      <span style={{width: `${Math.round(rating) * 100 / STARS_COUNT}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
