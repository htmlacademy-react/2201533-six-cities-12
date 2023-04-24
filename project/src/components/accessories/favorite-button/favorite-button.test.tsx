import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import HistoryRouter from '../../history-route/history-route';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {defaultState} from '../../../utils/default-state';
import {createMemoryHistory} from 'history';
import FavoriteButton from './favorite-button';
import thunk from 'redux-thunk';
import {OffersCardStyles} from '../../../consts/place-card-consts';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import userEvent from '@testing-library/user-event';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore(defaultState);
const history = createMemoryHistory();

describe('FavoriteButton', () => {
  const reactRedux = { useAppDispatch, useAppSelector };
  const useDispatchMock = jest.spyOn(reactRedux, 'useAppDispatch');
  it('should render correctly', async () => {
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoriteButton {...{
            id: 2,
            caption: OffersCardStyles.BookmarkCaption,
            width: '18',
            height: '19',
            place: 'place-card'}}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(`${OffersCardStyles.BookmarkCaption}`)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
