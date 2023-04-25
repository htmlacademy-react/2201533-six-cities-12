import React, {useRef} from 'react';
import {loginAction} from '../../../store/api-actions/api-actions';
import {useAppDispatch} from '../../../hooks';
import LoginFormInput from '../login-form-input/login-form-input';
import {toast} from 'react-toastify';

export type InputProps = {
  onFormInput: (text: string) => void;
  type: string;
  pattern?: string;
}

export default function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const password = useRef('');
  const email = useRef('');
  const isValidPass = useRef(false);
  const onInputPass = (pass: string) => {
    password.current = pass;
    const notSpase = /\S/;
    const digit = /\d/;
    const char = /[A-Za-z]/;
    const text = pass;
    isValidPass.current = digit.test(text) && char.test(text) && notSpase.test(text);
  };
  const onInputEmail = (text: string) => {
    email.current = text;
  };
  const submitHandle = (evt: React.FormEvent)=>{
    evt.preventDefault();
    if (!isValidPass.current){
      toast('the password must contain one digit and one letter');
      return;
    }
    dispatch(loginAction({email: email.current, password: password.current}));
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={submitHandle}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <LoginFormInput onFormInput={onInputEmail} type={'email'}/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <LoginFormInput onFormInput={onInputPass} type={'password'} pattern={'/[A-Za-z]{} [0-9]{}/'}/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}
