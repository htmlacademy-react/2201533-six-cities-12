import {Link} from 'react-router-dom';
import {AppRoute} from '../../settings';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getEmail, getIsAuth} from '../../store/user-process/user-selectors';
import React from 'react';
import {logoutAction} from '../../store/api-actions';

export default function RightHeader(): JSX.Element {
  //const {isAuth, email}: HeaderData = useAppSelector(getHeaderData);
  const isAuth = useAppSelector(getIsAuth);
  const email = useAppSelector(getEmail);
  const dispatch = useAppDispatch();
  const onLogout = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
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
            <Link className="header__nav-link" to='/' onClick={onLogout}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li> : ''}
      </ul>
    </nav>
  );
}
