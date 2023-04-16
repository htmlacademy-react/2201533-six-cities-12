import React, {useState} from 'react';
import {InputProps} from '../login-form/login-form';

export default function LoginFormEmail({onInput}: InputProps): JSX.Element {
  const [email, setEmail] = useState('');
  const onInputEmail = (evt: React.FormEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
    onInput(evt.currentTarget.value);
  };
  return (
    <input className="login__input form__input" type="email" name="email" placeholder="Email"
      value={email} required onInput={onInputEmail}
    />
  );
}
