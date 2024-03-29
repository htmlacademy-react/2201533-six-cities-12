import {useLocation, NavLink} from 'react-router-dom';
import {AppRoute} from '../../settings';
import RightHeader from '../right-header/right-header';

const CLASS = 'header__logo-link';
const ACTIVE_CLASS = 'header__logo-link--active';

const getClassName = ({isActive}: {isActive: boolean}): string => isActive ? `${CLASS} ${ACTIVE_CLASS}` : CLASS;

export default function Header(): JSX.Element {
  const isLogin = useLocation().pathname === AppRoute.Login;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink className={getClassName} to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </NavLink>
          </div>
          {!isLogin && <RightHeader/>}
        </div>
      </div>
    </header>
  );
}
