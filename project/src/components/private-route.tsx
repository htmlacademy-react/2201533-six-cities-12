import {AppRoute, AuthorizationStatus} from '../setings';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector((state: RootState) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
