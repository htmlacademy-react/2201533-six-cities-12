import React, {useState} from 'react';
import {InputProps} from '../login-form/login-form';

export default function LoginFormInput({onFormInput, type}: InputProps): JSX.Element {
  const [input, setInput] = useState('');
  const onInput = (evt: React.FormEvent<HTMLInputElement>) => {
    setInput(evt.currentTarget.value);
    onFormInput(evt.currentTarget.value);
  };
  return (
    <input className="login__input form__input" type={type} name={type}
      placeholder={type[0].toUpperCase().concat(type.substring(1))}
      value={input} required onInput={onInput}
      data-testid={type}
    />
  );
}
