import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {NameSpace, AuthorizationStatus, AppRoute} from '../../settings';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import {render, screen} from '@testing-library/react';
import {CITIES} from '../../store/cities';
import {getRandomCityIndex, makeFakeHosts, makeRandomFakeComments} from '../../utils/mocks';
import thunk from 'redux-thunk';
import {makeFakePlace} from '../../utils/fake-place';
import {makeFakeNearOffers} from '../../utils/offer-mocks';
import {defaultState} from '../../utils/default-state';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = createMemoryHistory();

const fakeApp = (store: MockStore) => (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "DefaultCity" when user navigate to "/"', () => {
    const store = mockStore(defaultState);
    history.push(AppRoute.Root);

    render(fakeApp(store));

    expect(screen.getByText(/in Paris/i)).toBeInTheDocument();
  });

  it('should render "City" when user navigate to "/:city"', () => {
    const index = getRandomCityIndex();
    const cityName = CITIES[index].name;
    const state = Object.assign({}, defaultState);
    state[NameSpace.City].cityIndex = index;
    const store = mockStore(state);
    history.push(`${AppRoute.Root}${cityName}`);
    render(fakeApp(store));
    const regexpCity = new RegExp(`in ${cityName}`, 'i');
    expect(screen.getByText(regexpCity)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    const store = mockStore(defaultState);
    history.push(AppRoute.Favorites);
    render(fakeApp(store));
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);
    const state = Object.assign({}, defaultState);
    state[NameSpace.User].authorizationStatus = AuthorizationStatus.Unknown;
    const store = mockStore(state);
    render(fakeApp(store));

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "Room" when user navigate to "/hotels/:id"', () => {
    const id = 3;
    const cityIndex = getRandomCityIndex();
    history.push(`${AppRoute.Room}/${id}`);
    const state = Object.assign({}, defaultState);
    state[NameSpace.Offer].selectedOffer = makeFakePlace(id, cityIndex);
    state[NameSpace.Offer].nearOffers = makeFakeNearOffers(cityIndex);
    state[NameSpace.Offer].comments = makeRandomFakeComments();
    state[NameSpace.Offers].hosts = makeFakeHosts();
    const store = mockStore(state);
    render(fakeApp(store));

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    const store = mockStore(defaultState);
    render(fakeApp(store));

    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
