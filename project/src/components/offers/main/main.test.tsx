import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {defaultState} from '../../../utils/default-state';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import Main from './main';
import {getRandomCityIndex} from '../../../utils/mocks';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component Main offers', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Main id={getRandomCityIndex()}/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Cities')).toBeInTheDocument();
    expect(screen.getByTestId('location-tabs')).toBeInTheDocument();
    expect(screen.getByTestId('places')).toBeInTheDocument();
  });
});
