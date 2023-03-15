import React from 'react';
import {STARS_COUNT} from '../../setings';

export default function RatingStars({rating, className}: {rating: number; className: string}): JSX.Element {
  return (
    <div className={className}>
      <span style={{width: `${Math.round(rating) * 100 / STARS_COUNT}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}
