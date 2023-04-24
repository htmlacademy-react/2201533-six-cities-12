import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import CityPage from './citi-page';
import App from '../../components/app/app';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import {defaultState} from '../../utils/default-state';
import {AppRoute, RouteParam} from '../../settings';
import {Routes, Route} from "react-router-dom";

import {CITIES} from '../../store/cities';
import {getRandomCityIndex} from '../../utils/mocks';
import React from "react";


const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore(defaultState);

describe('Page: City', () => {
  it('should render correctly', () => {
    history.push(`${AppRoute.Root}${CITIES[getRandomCityIndex()].name}`);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={RouteParam.City} element={<CityPage />}/>
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('page-main')).toBeInTheDocument();
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.getByText('Cities')).toBeInTheDocument();
  });

  it('should render not found page if address is not correctly', () => {
    history.push(`${AppRoute.Root}Кемерово`);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={RouteParam.City} element={<CityPage />}/>
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
