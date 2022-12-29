import { Component } from "react";
import { nanoid } from "nanoid";
import { UserList } from './UserList/UserList'
import UserForm from './UserForm/UserForm'

class Users extends Component {
  state = {
    users: [],
    name: "",
    phone: "",
  };

  
  handleSubmit = (user) => {
    const newUser = { ...user, id: nanoid() }
    this.setState(prevState => ({ users: [...prevState.users, newUser] }))
  }

  render() {
    const { users } = this.state;
    return (
        <>
            <UserForm onHandleSubmit={this.handleSubmit} />
            <>
                {users.length > 0 && <UserList users={users} />}
            </>
            
        </>
    );

  }
}

export default Users;
