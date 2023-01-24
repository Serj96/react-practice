import UserItem from 'Users/UserItem/UserItem';

export function UserList({ users, onHandelDelete }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <UserItem
            name={user.name}
            phone={user.number}
            onHandelDelete={onHandelDelete}
            id={user.id}
          />
        </li>
      ))}
    </ul>
  );
}
