import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import FavoritesLocations from './favorites-locations';
import {NameSpace} from '../../../settings';
import {makeFakeFavorites} from '../../../utils/favorites-mocks';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component FavoritesLocations', () => {
  it('should render correctly empty favorites', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesLocations count={0}/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const state = Object.assign({}, defaultState);
    const favorites = makeFakeFavorites();
    state[NameSpace.Favorites].favorites = favorites;
    const count = favorites.length;
    state[NameSpace.Favorites].count = favorites.length;
    const citiesCount = new Set<number>(Array.from(favorites, (element) => element.city)).size;
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesLocations count={count}/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getAllByTestId('favorites-city').length).toBe(citiesCount);
  });
});
