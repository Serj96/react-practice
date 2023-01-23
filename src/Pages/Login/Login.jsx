import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { selectIsLogin } from 'redux/auth/authSelector';
import { Navigate } from 'react-router-dom';
export default function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);
  const logIn = user => {
    dispatch(login(user));
  };
  return (
    <>{isLoggedIn ? <Navigate to="/users" /> : <AuthForm onSubmit={logIn} />}</>
  );
}
