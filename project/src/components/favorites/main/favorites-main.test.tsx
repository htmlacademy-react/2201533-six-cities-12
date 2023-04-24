import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import FavoritesMain from './favorites-main';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component FavoritesMain', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesMain/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('favorite-locations')).toBeInTheDocument();
  });
});
