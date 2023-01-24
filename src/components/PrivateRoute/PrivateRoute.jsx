import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/authSelector';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
