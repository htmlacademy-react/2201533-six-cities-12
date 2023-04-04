import Header from '../../components/header/header';
import React, {useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';

export default function Login(): JSX.Element{
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const isValidPass = useRef(false);
  const dispatch = useAppDispatch();
  const onSubmit = (evt: React.FormEvent)=>{
    evt.preventDefault();
    if (!isValidPass.current){
      return;
    }
    dispatch(loginAction({email: email, password: pass}));
  };
  const onInputEmail = (evt: React.FormEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
  };
  const onInputPass = (evt: React.FormEvent<HTMLInputElement>) => {
    const digit = /\d/;
    const char = /[A-Za-z]/;
    const text = evt.currentTarget.value;
    isValidPass.current = digit.test(text) && char.test(text);
    setPass(evt.currentTarget.value);
  };
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email"
                  value={email} required onInput={onInputEmail}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password"
                  value={pass} required onInput={onInputPass}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
