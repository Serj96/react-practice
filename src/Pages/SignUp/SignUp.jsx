import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
export function SignUp() {
  const dispacth = useDispatch();
  return <AuthForm isSignUp={true} />;
}
