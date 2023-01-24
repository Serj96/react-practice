import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

export default function Login() {
  const dispatch = useDispatch();

  const logIn = user => {
    dispatch(login(user));
  };
  return <AuthForm onSubmit={logIn} />;
}
