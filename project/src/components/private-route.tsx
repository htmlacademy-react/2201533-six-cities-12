import {AppRoute} from '../settings';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../hooks';
import {selectIsAuth, selectIsChecking} from '../store/user-process/user-selectors';
import Loading from '../pages/loading/loading';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);
  const isChecking = useAppSelector(selectIsChecking);
  if (isChecking){
    return <Loading/>;
  }
  return (
    isAuth ? children : <Navigate to={AppRoute.Login} />
  );
}
