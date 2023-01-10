import { useState } from "react";

export const UserForm = ({ onHandleSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangePhone = (event) => {
    const { value } = event.target;
    setPhone(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit({ name, phone });
    setName("");
    setPhone("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Name{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label htmlFor="">
        Phone{" "}
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
        />
      </label>
      <button type="submit">Add user</button>
    </form>
  );
};

// class orUserForm extends Component {
//     state = {
//     name: "",
//     phone: "",
//     };

//     handleChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onHandleSubmit(this.state);
//         this.setState({ name: "", phone: ""})
//     }

//     render() {
//         const {name, phone} = this.state
//         return (
//         <form action="" onSubmit={this.handleSubmit}>
//           <label htmlFor="">
//             Name{" "}
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label htmlFor="">
//             Phone{" "}
//             <input
//               type="tel"
//               name="phone"
//               value={phone}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Add user</button>
//         </form>
//         )
//     }
// }

// export default UserForm;
