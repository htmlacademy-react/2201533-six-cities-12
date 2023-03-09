import CityPage from '../../pages/city-page/citi-page';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {AppRoute, AUTH} from '../../setings';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Navigate to={AppRoute.DefaultCity}/>}/>
          <Route path = ':city' element={<CityPage />}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={AUTH}
            >
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login/>}/>
          <Route path={AppRoute.Room} element={<Room/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>);
}
