import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { UserList } from './UserList/UserList';
import { UserForm } from './UserForm/UserForm';

const STORAGE_KEY = 'users';

export default function Users() {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  useEffect(() => {
    const usersToSave = JSON.stringify(users);
    localStorage.setItem(STORAGE_KEY, usersToSave);
  }, [users]);

  const handelDelete = useCallback(id => {
    setUsers(prev => prev.filter(user => user.id !== id));
  }, []);

  const handleSubmit = user => {
    const newUser = { ...user, id: nanoid() };
    setUsers(prev => [...prev, newUser]);
  };
  return (
    <>
      <UserForm onHandleSubmit={handleSubmit} />
      <>
        {users.length > 0 && (
          <UserList users={users} onHandelDelete={handelDelete} />
        )}
      </>
    </>
  );
}
// class Users extends Component {
//   state = {
//     users: [],
//     name: "",
//     phone: "",
//   };
//   componentDidMount() {
//     const users = localStorage.getItem(STORAGE_KEY);
//     const parsedUsers = JSON.parse(users);
//     if (parsedUsers?.length) {
//       this.setState({ users: parsedUsers });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.users !== this.state.users) {
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.users));
//     }
//   }
//   handleSubmit = (user) => {
//     const newUser = { ...user, id: nanoid() };
//     this.setState((prevState) => ({ users: [...prevState.users, newUser] }));
//   };

//   handelDelete = (id) => {
//     this.setState((prevState) => ({
//       users: prevState.users.filter((user) => user.id !== id),
//     }));
//   };

//   render() {
//     const { users } = this.state;
//     return (
//       <>
//         <UserForm onHandleSubmit={this.handleSubmit} />
//         <>
//           {users.length > 0 && (
//             <UserList users={users} onHandelDelete={this.handelDelete} />
//           )}
//         </>
//       </>
//     );
//   }
// }

// export default Users;
