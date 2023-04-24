import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {defaultState} from "../../../utils/default-state";
import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import HistoryRouter from "../../history-route/history-route";
import LocationsTabs from "../locations-tabs/locations-tabs";
import {CITIES} from "../../../store/cities";
import Places from "./places";
import {NameSpace} from "../../../settings";
import {getRandomInt} from "../../../utils/random";
import {getRandomCityIndex} from "../../../utils/mocks";
import App from "../../app/app";

const mockStore = configureMockStore();
const history = createMemoryHistory();
const fakePlaces = (store: MockStore) => (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Places />
    </HistoryRouter>
  </Provider>
);
describe('Component Places', () => {
  it('should render correctly', () => {
    const offersLastIndex = defaultState[NameSpace.Offers].offers.length - 1;
    const cityIndex = defaultState[NameSpace.Offers].offers[getRandomInt(0, offersLastIndex)].city;
    const state = Object.assign({}, defaultState);
    const count = defaultState[NameSpace.Offers].offers.filter((offer) =>
      offer.city === cityIndex ).length;
    state[NameSpace.City].cityIndex = cityIndex;
    const store = mockStore(state);
    render(fakePlaces(store));
    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(`${count} places to stay in ${CITIES[cityIndex].name}`)).toBeInTheDocument();
    expect(screen.getAllByTestId('place-card').length).toBe(count);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('should render correctly if dont have offers', () => {
    const cityIndex = getRandomCityIndex();
    const state = Object.assign({}, defaultState);
    state[NameSpace.Offers].offers = [];
    state[NameSpace.City].cityIndex = cityIndex;
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Places />
        </HistoryRouter>
      </Provider>,
    );
    expect(screen.getByText(
      `We could not find any property available at the moment in ${CITIES[cityIndex].name}`)).toBeInTheDocument();
    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
  });
});
