import {render, screen} from '@testing-library/react';
import LoginFormInput from './login-form-input';

describe('Component: LoginForm', () => {
  it('should render "LoginForm"', () => {
    const onInputHandle = jest.fn();
    render(
      <
        LoginFormInput
        onFormInput={onInputHandle}
        type={'email'}
      />
    );
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
//    await userEvent.type(screen.getByTestId('email'), 'keks@mail.ru');

//    expect(screen.getByDisplayValue(/keks@mail.ru/i)).toBeInTheDocument();
  });
});
