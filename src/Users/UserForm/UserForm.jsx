import { Component } from 'react';


class UserForm extends Component {
    state = {
    name: "",
    phone: "",
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onHandleSubmit(this.state);
        this.setState({ name: "", phone: ""})
    }

    
    render() {
        const {name, phone} = this.state
        return (
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Phone{" "}
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add user</button>
        </form>
        )
    }
}

export default UserForm;