import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../setings';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../store';

export default function RightHeader(): JSX.Element {
  const isAuth = useSelector((state: RootState) => state.authorizationStatus === AuthorizationStatus.Auth);
  const email = store.getState().userEmail;
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {isAuth ?
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{email}</span>
              <span className="header__favorite-count">3</span>
            </Link> :
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>}
        </li>
        {isAuth ?
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li> : ''}
      </ul>
    </nav>
  );
}
