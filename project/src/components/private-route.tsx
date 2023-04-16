import {AppRoute} from '../settings';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';
import {getIsAuth} from '../store/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  return (
    isAuth ? children : <Navigate to={AppRoute.Login} />
  );
}
