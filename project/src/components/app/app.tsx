import CityPage from '../../pages/city-page/citi-page';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {AppRoute, AUTH, RouteParam} from '../../setings';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import {DEFAULT_CITY} from '../../store/cities';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Loading from '../../pages/loading/loading';

export default function App(): JSX.Element {
  const isLoaded = useSelector((state: RootState) => state.isOffersLoaded);
  if (!isLoaded){
    return (<Loading/>);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<Navigate to={DEFAULT_CITY}/>}/>
          <Route path={RouteParam.City} element={<CityPage />}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={AUTH}
            >
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
    </BrowserRouter>);
}
