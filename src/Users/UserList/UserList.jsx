import UserItem from 'Users/UserItem/UserItem';

export function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <UserItem name={user.name} phone={user.phone} />
        </li>
      ))}
    </ul>
  );
}
