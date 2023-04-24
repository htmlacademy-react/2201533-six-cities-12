import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import LocationsTabs from './locations-tabs';
import {CITIES} from '../../../store/cities';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component LocationTabs', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationsTabs />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('location-tabs')).toBeInTheDocument();
    CITIES.forEach((city) => expect(screen.getByText(`${city.name}`)).toBeInTheDocument());
  });
});
