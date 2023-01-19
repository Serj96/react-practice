import { useCallback, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { UserList } from '../../Users/UserList/UserList';
import { UserForm } from '../../Users/UserForm/UserForm';
import { Section } from './Users.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectFilteredUsers } from 'redux/users/selectors';
// import { addUser, deleteUser } from 'redux/users/usersSlice';
import { selectFilter } from 'redux/filter/selectors';
import { filter } from 'redux/filter/action';
import { fetchUsers, addUser, removeUser } from 'redux/users/operations';
// import { useContext } from 'react';
// import { LangContext } from 'context/context';
import content from '../../content/content.json';
import useLang from 'hooks/useLang';

// const STORAGE_KEY = 'users';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const userFilter = useSelector(selectFilter);

  // const [users, setUsers] = useState(
  //   () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  // );
  useEffect(() => {
    // const usersToSave = JSON.stringify(users);
    // localStorage.setItem(STORAGE_KEY, usersToSave);
    dispatch(fetchUsers());
  }, [dispatch]);

  // const { lang } = useContext(LangContext);
  const { lang } = useLang();
  const handelDelete = useCallback(
    id => {
      dispatch(removeUser(id));
      // dispatch(deleteUser(id));
      // setUsers(prev => prev.filter(user => user.id !== id));
    },
    [dispatch]
  );

  const handleSubmit = user => {
    const checkUser = users.find(
      userItem => userItem.name === user.name || userItem.phone === user.phone
    );
    checkUser
      ? alert(`${user.name} already in your contacts`)
      : dispatch(addUser(user));

    // const newUser = { ...user, id: nanoid() };
    // setUsers(prev => [...prev, newUser]);
  };

  const handleChange = event => {
    const { value } = event.target;
    dispatch(filter(value));
  };

  const handleFilter = () => {
    if (userFilter) {
      return users.filter(user =>
        user.name.toLowerCase().includes(userFilter.toLowerCase())
      );
    }
    return users;
  };

  return (
    <Section>
      <h1>{content.title[lang]}</h1>
      <UserForm onSubmit={handleSubmit} />
      <>
        {users.length > 0 && (
          <>
            <input type="text" value={userFilter} onChange={handleChange} />
            <UserList users={handleFilter()} onHandelDelete={handelDelete} />
          </>
        )}
      </>
    </Section>
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
