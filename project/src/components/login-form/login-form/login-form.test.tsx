import {Provider} from 'react-redux';
import LoginForm from './login-form';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();

describe('Component: LoginForm', () => {
  it('should render "LoginForm"', () => {
    render(
      <Provider store={mockStore({})}>
        <LoginForm />
      </Provider>,
    );

    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });
});
