import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/authSelector';

export default function UserNavigation() {
  const user = useSelector(selectAuth);
  const { name, email } = user;
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <button type="button">logout</button>
    </>
  );
}
