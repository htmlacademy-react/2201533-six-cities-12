import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import {makeFakeFavorites} from '../../../utils/favorites-mocks';
import {NameSpace} from '../../../settings';
import FavoritesCity from './favorites-city';
import {getRandomInt} from '../../../utils/random';
import {CITIES} from '../../../store/cities';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component FavoritesLocations', () => {
  const state = Object.assign({}, defaultState);
  const favorites = makeFakeFavorites();
  const cityId = favorites[getRandomInt(0, favorites.length - 1)].city;
  const cityName = CITIES[cityId].name;
  state[NameSpace.Favorites].favorites = favorites;
  const count = favorites.filter((favorite) => favorite.city === cityId).length;

  it('should render correctly empty favorites', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesCity cityID={cityId}/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(`${cityName}`)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(count);
  });
});
