import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import SortingForm from './sorting-form';
import {SORTING_VARIANTS} from '../../../consts/sort-consts';

const mockStore = configureMockStore();
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('Component SortingForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SortingForm/>
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    SORTING_VARIANTS.forEach((variant) =>
      expect(screen.getAllByText(`${variant.text}`).length).not.toBe(0));
  });
});
