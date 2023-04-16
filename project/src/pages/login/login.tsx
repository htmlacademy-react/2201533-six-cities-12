import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';
import {selectIsAuth} from '../../store/user-process/user-selectors';
import {Navigate, Link} from 'react-router-dom';
import {AppRoute} from '../../settings';
import LoginForm from '../../components/login-form/login-form/login-form';
import useRandomCity from '../../hooks/useRandomCity';

export default function Login(): JSX.Element{
  const randomCity = useRandomCity();
  const isAuth = useAppSelector(selectIsAuth);
  if (isAuth){
    return <Navigate to={AppRoute.Root}/>;
  }
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.Root}${randomCity.name}`}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
