import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../redux/auth/authSelector';
import { logout } from 'redux/auth/authOperations';
export default function UserNavigation() {
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();
  const { name, email } = user;
  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <button type="button" onClick={logOutHandler}>
        logout
      </button>
    </>
  );
}
