import {render, screen} from '@testing-library/react';
import RatingStars from './rating-stars';
import {getRandomRating} from '../../../utils/mocks';
import {STARS_COUNT} from '../../../settings';

describe('Component PremiumMark', () => {
  it('should render correctly', () => {
    const rating = getRandomRating();
    const style = `width: ${Math.round(rating) * 100 / STARS_COUNT}%`;
    render(
      <RatingStars rating={rating} className={'place-card'}/>
    );
    expect(screen.getByTestId('mark')).toBeInTheDocument();
    expect(screen.getByTestId('mark')).toHaveStyle(style);
  });
});
