import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/auth/authOperations';
import { selectIsLogin } from 'redux/auth/authSelector';
import { Navigate } from 'react-router-dom';
export function SignUp() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);
  const register = user => {
    dispatch(signUp(user));
  };
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/users" />
      ) : (
        <AuthForm isSignUp={true} onSubmit={register} />
      )}
    </>
  );
}
