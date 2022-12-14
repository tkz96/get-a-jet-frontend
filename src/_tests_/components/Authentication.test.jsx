import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Authentication from '../../components/Authentication';

describe('Authentication', () => {
  test('signup should have a signin button', () => {
    render(
      <Authentication />,
    );

    const submitButton = screen.getByText('Sign In');

    expect(submitButton).toBeInTheDocument();
  });
  test('signin page should have username, password, sign in and sign up buttons', () => {
    render(
      <Authentication />,
    );

    const submitButton = screen.getByText('Sign In');

    fireEvent.click(submitButton);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // test('signin page should submit data when user inputs and sign in sucessfully', () => {
  //   const submit = jest.fn();
  //   render(
  //     <Authentication />,
  //   );

  //   const submitButton = screen.getByText('Sign In');

  //   fireEvent.click(submitButton);

  //   const userName = screen.getByLabelText('Name');
  //   const userPassword = screen.getByLabelText('Password');

  //   userEvent.type(userName, 'Sharon Atieno');
  //   expect(userName).toHaveValue('Sharon Atieno');
  //   userEvent.type(userPassword, '12345');
  //   userEvent.click(submitButton);

  //   expect(submit).toHaveBeenCalledWith({
  //     userName: 'Sharon Atieno',
  //     userPassword: '12345',
  //   });
  // });
  test('signup page should have username, email, password, sign in and sign up buttons', () => {
    render(
      <Authentication />,
    );

    const submitButton = screen.getByText('Sign In');

    fireEvent.click(submitButton);
    const signupButton = screen.getByRole('button', { name: 'Sign up' });
    fireEvent.click(signupButton);
    const upButton = screen.getByRole('button', { name: 'Sign Up' });
    const inButton = screen.getAllByText('Sign In')[1];
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(upButton).toBeInTheDocument();
    expect(inButton).toBeInTheDocument();
  });
});
