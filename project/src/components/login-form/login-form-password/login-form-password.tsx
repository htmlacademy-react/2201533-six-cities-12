import React, {useState} from 'react';
import {InputProps} from '../login-form/login-form';

export default function LoginFormPassword({onInput}: InputProps): JSX.Element {
  const [pass, setPass] = useState('');
  const onInputPass = (evt: React.FormEvent<HTMLInputElement>) => {
    setPass(evt.currentTarget.value);
    onInput(evt.currentTarget.value);
  };
  return (
    <input className="login__input form__input" type="password" name="password" placeholder="Password"
      value={pass} required onInput={onInputPass}
    />
  );
}
