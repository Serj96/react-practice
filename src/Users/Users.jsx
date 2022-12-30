import { Component } from "react";
import { nanoid } from "nanoid";
import { UserList } from "./UserList/UserList";
import UserForm from "./UserForm/UserForm";
const STORAGE_KEY = "users";
class Users extends Component {
  state = {
    users: [],
    name: "",
    phone: "",
  };
  componentDidMount() {
    const users = localStorage.getItem(STORAGE_KEY);
    const parsedUsers = JSON.parse(users);
    if (parsedUsers?.length) {
      this.setState({ users: parsedUsers });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.users !== this.state.users) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.users));
    }
  }
  handleSubmit = (user) => {
    const newUser = { ...user, id: nanoid() };
    this.setState((prevState) => ({ users: [...prevState.users, newUser] }));
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UserForm onHandleSubmit={this.handleSubmit} />
        <>{users.length > 0 && <UserList users={users} />}</>
      </>
    );
  }
}

export default Users;
