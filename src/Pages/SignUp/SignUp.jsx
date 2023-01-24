import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/authOperations';

export function SignUp() {
  const dispatch = useDispatch();

  const register = user => {
    dispatch(signUp(user));
  };
  return <AuthForm isSignUp={true} onSubmit={register} />;
}
