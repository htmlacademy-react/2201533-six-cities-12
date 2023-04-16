import {AppRoute} from '../settings';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';
import {selectIsAuth} from '../store/user-process/user-selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);
  return (
    isAuth ? children : <Navigate to={AppRoute.Login} />
  );
}
