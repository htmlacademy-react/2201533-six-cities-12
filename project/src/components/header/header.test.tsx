import {AppRoute} from '../../settings';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import Header from './header';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../utils/default-state';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(defaultState);

describe('Component Header', () => {
  it('should render correctly', () => {
    history.push(`${AppRoute.Root}`);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.getByTestId('right-header')).toBeInTheDocument();
  });

  it('should be displayed correctly from the Login page', () => {
    history.push(`${AppRoute.Login}`);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.queryByTestId('right-header')).not.toBeInTheDocument();
  });
});
