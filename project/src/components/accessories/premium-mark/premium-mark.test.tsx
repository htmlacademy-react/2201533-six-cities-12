import {render, screen} from '@testing-library/react';
import PremiumMark from './premium-mark';

describe('Component PremiumMark', () => {
  it('should render correctly', () => {
    render(
      <PremiumMark className={'place-card'}/>
    );
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
