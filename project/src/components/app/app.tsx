import CityPage from '../../pages/city-page/citi-page';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AppRoute, RouteParam} from '../../settings';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import {DEFAULT_CITY} from '../../store/cities';
import {useAppSelector} from '../../hooks';
import Loading from '../../pages/loading/loading';
import {getIsOffersLoaded} from '../../store/offers/offers-selectors';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

export default function App(): JSX.Element {
  const isLoaded = useAppSelector(getIsOffersLoaded);
  if (!isLoaded){
    return (<Loading/>);
  }
  return (
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Navigate to={DEFAULT_CITY}/>}/>
        <Route path={RouteParam.City} element={<CityPage />}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={`${AppRoute.Room}/${RouteParam.Room}`}
          element={<Room />}
        />
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}
